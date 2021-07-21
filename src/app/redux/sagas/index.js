import { takeLatest, put, call, select, all, fork } from "redux-saga/effects";
import * as types from "../types";
import { fetchSaga } from "./helper";
import { axios } from "../../axios";

function* requestDataLoad(data) {
  try {
    const response = yield call(fetchSaga, "/Training/GetCompanyGroups", {});
    yield put({ type: types.GROUPS_UPLOAD_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.GROUPS_UPLOAD_FAILURE, payload: error });
  }
}

function* requestSubCategories(data) {
  if (data.payload) {
    const { id } = data.payload;
    try {
      const response = yield call(
        fetchSaga,
        `/Training/GetCategoriesByGroupId?groupId=${id}`,
        {}
      );
      yield put({
        type: types.GET_GROUPS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      yield put({ type: types.GET_GROUPS_FAILURE, payload: error });
    }
  }
}

function* getCompaniesDetail(data) {
  try {
    const response = yield call(fetchSaga, `/Training/GetCompanyProfile`, {});
    yield put({
      type: types.COMPANIES_DETAILS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({ type: types.COMPANIES_DETAILS_FAILURE, payload: error });
  }
}

function* requestGroupSubCategories(data) {
  if (data.payload) {
    const { groupId, categoryId } = data.payload;
    try {
      const response = yield call(
        fetchSaga,
        `/Training/GetSubCategoryByCategoryIdAndGroupId?groupId=${groupId}&categoryId=${categoryId} `,
        {}
      );
      yield put({
        type: types.GROUPS_SUBCATEGORIES_SUCCESS,
        payload: response,
      });
    } catch (error) {
      yield put({ type: types.GROUPS_SUBCATEGORIES_FAILURE, payload: error });
    }
  }
}

function* saveCommunication(dat) {
  console.log(dat.payload);
  try {
    const { data, onSuccess } = dat.payload;
    const { detail, group, subCategory, stage } = data;
    const { questions, uploadDocs, filters } = detail;
    const saveCommunication = yield call(
      fetchSaga,
      "/Training/SaveCommunication",
      {
        method: "post",
        body: {
          DocTitle: detail.title,
          DocType: "save",
          Instruction: detail.description,
          DueDate: "",
          ReleaseDate: new Date(),
          Reference: group.categoryName,
          RequHirestaff: "",
          RequHireic: "",
          RequHirevendor: "",
          retake: parseInt(detail.retake),
          EffectiveDate: "-",
          type: "save",
          Docid: 0,
          HOC: parseFloat(detail.hours),
          DaysToComplete: "",
          DocTitles: "",
          VideoTitles: "",
          ScormTitles: "",
          Onstaging: stage ? true : false,
          Onlib: stage ? false : true,
          IsEmpReq: false,
          GroupId: group.id,
          Group: group.categoryName,
          ReferenceId: group.id,
          CategoryId: subCategory.id,
        },
      }
    );

    const saveAction = yield call(fetchSaga, "/Training/SaveCommReqAction", {
      method: "post",
      body: {
        docId: parseInt(saveCommunication),
        reqActionval: detail.acknowlegdmentVal,
        type: "save",
        reqactionid: 1,
      },
    });

    const saveTestRules = yield call(fetchSaga, "/Training/SaveCommTestRules", {
      method: "post",
      body: {
        RandQues: detail.randomQues,
        RandAns: detail.randomAns,
        ReqReTest: detail.retakeTest,
        ShowWrongeAns: detail.showWrongAns,
        PassingScore: detail.passingscore,
        Instruction: detail.instruction,
        Attempts: detail.attempts,
        docid: parseInt(saveCommunication),
        type: "save",
        Testruleid: 0,
      },
    });

    let saveCommQues = null;
    if (questions !== null) {
      saveCommQues = yield call(fetchSaga, "Training/SaveCommQuesAns", {
        method: "post",
        body: questions.map((item) => {
          return {
            Question: item.question,
            Answer: item.answers.map((val) => {
              return {
                question: val.answer,
                assessmentid: 0,
                docId: parseInt(saveCommunication),
                savestatus: "save",
                correctvalue: val.correctAns,
              };
            }),
          };
        }),
      });
    }

    let saveContent = null;
    if (detail.uploadDocs.length > 0) {
      let tempUrl = `${uploadDocs
        .map((item) => {
          return `http://vendorviewstage.azurewebsites.net/Content/documents/communications/104/${item.name}`;
        })
        .join("*")}`;
      console.log("Url", tempUrl);
      saveContent = yield call(fetchSaga, "/Training/SaveCommContents", {
        method: "post",
        body: {
          docId: parseInt(saveCommunication),
          docfiles: tempUrl,
          videofiles: null,
          scormfiles: null,
          type: "save",
          doctitle: "",
          videotitle: "",
          scormname: "",
          commcontentIds: "0",
        },
      });
    }

    let saveFilters = null;
    let states =
      "0#" +
      [
        ...new Set(
          filters.map((s) => {
            return s.states.values;
          })
        ),
      ].join("*") +
      ":state$";

    let counties =
      filters
        .map((s) => {
          return s.counties.values;
        })
        .join("*") + ":county$";

    let cities =
      filters
        .reduce((ar, s) => {
          ar = [
            ...ar,
            ...s.cites.map((i) => {
              return i.values;
            }),
          ];
          return ar;
        }, [])
        .join("*") + ":city";

    saveFilters = yield call(
      fetchSaga,
      "/Training/FilterCommunicationRecipient",
      {
        method: "post",
        body: {
          type: 2,
          EditId: 0,
          DocSeqId: parseInt(saveCommunication),
          ProfessionalVendorFilter: detail.vendorTypeID,
          StaffGroupFilter: "",
          businessunit: "",
          locationfilter: filters.length > 0 ? states + counties + cities : "",
          officelocation: "",
          professionalfilter: "",
          servicefilter: "",
          titlefilter: "",
          titleidfilter: "",
          typefilter: ",,vendor,notclient,vendor",
        },
      }
    );

    // let isPublish = null;
    // // CompanyName,
    // // CompanyId
    // console.log(
    //   "Checking",
    //   saveFilters.vendordetails
    //     .map((item) => {
    //       return item.Id + ";" + item.CompanyId;
    //     })
    //     .join(",")
    // );
    // if (saveFilters !== null) {
    //   console.log("Training ", String(saveCommunication).split(":")[1]);
    //   isPublish = yield call(fetchSaga, "/Training/PublishComm", {
    //     method: "post",
    //     body: {
    //       totalStaff: "",
    //       totalIC: "",
    //       totalClient: "",
    //       totalVendor: saveFilters.vendordetails
    //         .map((item) => {
    //           return item.Id + ";" + item.CompanyId;
    //         })
    //         .join(","),
    //       EditDocId: 0,
    //       DocId: String(saveCommunication),
    //       DocType: "",
    //       ReleaseDate: new Date(),
    //       VersoinNo: String(saveCommunication).split(":")[1],
    //     },
    //   });
    // }
    console.log("saveCommunication", parseInt(saveCommunication));
    console.log("saveAction", saveAction);
    console.log("saveTestRules", saveTestRules);
    console.log("saveCommQues", saveCommQues);
    console.log("saveContent", saveContent);
    console.log("saveFilters", saveFilters);

    if (saveCommunication) {
      onSuccess();
    }
  } catch (error) {
    console.log("Error", error);
  }
}

function* requestDocsUpload(data) {
  try {
    let response = data.payload.map((item) => {
      const formData = new FormData();
      formData.append("myFile", item, item.name);
      var config = {
        method: "post",
        url: "/Training/upload",
        header: {
          "Content-Type": "multipart/form-data;",
        },
        data: formData,
      };
      return axios(config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    console.log("Response", response);
  } catch (error) {
    console.log(error);
  }
}

function* getCommunication(data) {
  try {
    const { ID, onGetValues } = data.payload;
    const response = yield call(
      fetchSaga,
      `/Training/GetCommunication?id=${ID}`,
      {}
    );
    onGetValues(response);
  } catch (error) {
    yield put({ type: types.COMPANIES_DETAILS_FAILURE, payload: error });
  }
}

function* requestCounties(data) {
  try {
    console.log(data.payload);
    const { name, type } = data.payload;
    const response = yield call(
      fetchSaga,
      `/Training/GetCountiesList?StateAbbre=${name}&type=${type}`,
      {}
    );
    yield put({ type: types.GET_COUNTIES_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.GET_COUNTIES_FAILURE, payload: error });
  }
}

function* requestCities(data) {
  try {
    console.log(data.payload);
    const { name, type } = data.payload;
    const response = yield call(
      fetchSaga,
      `/Training/GetCitiesList?CountyId=${name}&type=${type}`,
      {}
    );
    yield put({ type: types.GET_CITES_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.GET_CITES_FAILURE, payload: error });
  }
}

function* rootSaga() {
  yield takeLatest(types.GROUPS_UPLOAD, requestDataLoad);
  yield takeLatest(types.GET_GROUPS, requestSubCategories);
  yield takeLatest(types.COMPANIES_DETAILS, getCompaniesDetail);
  yield takeLatest(types.GROUPS_SUBCATEGORIES, requestGroupSubCategories);
  yield takeLatest(types.SAVE_COMMUNICATION, saveCommunication);
  yield takeLatest(types.UPLOAD_DOCS, requestDocsUpload);
  yield takeLatest(types.GET_COMMUNICATION, getCommunication);
  yield takeLatest(types.GET_COUNTIES, requestCounties);
  yield takeLatest(types.GET_CITES, requestCities);
}

export default rootSaga;

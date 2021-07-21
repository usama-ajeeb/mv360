import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PreviewCard,
  InputWithLabel,
  Upload,
  TextAreaWithOptions,
  CreatePageTitle,
  SelectOptionWithLabel,
  ChoiceCardWithButton,
  Footer,
  ListingCard,
  CheckboxCard,
  CoverageAreaShow,
} from "../../components";
import { CheckBox } from "../../common";
import { faCloudUploadAlt } from "@fortawesome/pro-regular-svg-icons";
import {
  faVideo,
  faFilePdf,
  faFileVideo,
} from "@fortawesome/pro-light-svg-icons";
import {
  getCompaniesDetail,
  getStatescounties,
  getStatesCities,
} from "../../redux/selector";
import { getCounties, getCities } from "../../redux/actions";
import ShowQuestions from "../ShowQuestions";

const creditHours = [
  {
    text: "NA",
    val: "",
  },
  {
    text: "1 hours",
    val: 1,
  },
  {
    text: "2 hours",
    val: 2,
  },
  {
    text: "3 hours",
    val: 3,
  },
  {
    text: "4 hours",
    val: 4,
  },
  {
    text: "5 hours",
    val: 5,
  },
  {
    text: "6 hours",
    val: 6,
  },
  {
    text: "7 hours",
    val: 7,
  },
  {
    text: "8 hours",
    val: 8,
  },
];

const retakeOpt = [
  {
    text: "NA",
    val: "",
  },
  {
    text: "6 months",
    val: 6,
  },
  {
    text: "12 months",
    val: 12,
  },
  {
    text: "18 months",
    val: 18,
  },
  {
    text: "24 months",
    val: 24,
  },
];

const attempts = [
  {
    text: "1",
    val: "1",
  },
  {
    text: "2",
    val: "2",
  },
  {
    text: "3",
    val: "3",
  },
  {
    text: "4",
    val: "4",
  },
  {
    text: "5",
    val: "5",
  },
  {
    text: "6",
    val: "6",
  },
  {
    text: "Unlimited",
    val: "0",
  },
];

const EditorDropZone = ({
  edit,
  addQuestionBtn,
  items,
  details,
  selected,
  onAction,
}) => {
  console.log("items test", items);

  const dispatch = useDispatch();

  const [assesment, setAssesment] = React.useState(false);
  const [selectStates, setSelectStates] = useState(false);
  const [selectCountries, setSelectCountries] = useState(false);
  const [selectCities, setSelectCities] = useState(false);
  const statesList = useSelector(getCompaniesDetail).StateDetails;
  const countiesList = useSelector(getStatescounties);
  const citiesList = useSelector(getStatesCities);

  const [statesFilter, setStatesFilter] = useState({
    states: {},
    counties: {},
    cites: [],
  });

  const handleStateFilter = (val, name, typeID, checked, type) => {
    switch (type) {
      case "states":
        let statesTemp = {};
        if (name.includes("all")) {
          setSelectCountries(false);
          setSelectCities(false);

          if (checked) {
            statesTemp = {
              name: val,
              type: "all",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
          }
        } else {
          if (checked) {
            statesTemp = {
              name: val,
              type: "partial",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
            setSelectCountries(true);
            dispatch(getCounties({ name: name, type: 1 }));
          }
        }
        setSelectCities(false);
        setStatesFilter({
          ...statesFilter,
          states: statesTemp,
          counties: {},
          cites: [],
        });

        break;

      case "counties":
        let countyTemp = {};
        if (name.includes("all")) {
          setSelectCities(false);
          if (checked) {
            countyTemp = {
              name: val,
              type: "all",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
          }
        } else {
          if (checked) {
            countyTemp = {
              name: val,
              type: "partial",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
            setSelectCities(true);
            dispatch(getCities({ name: name, type: 1 }));
          }
        }
        setStatesFilter({ ...statesFilter, counties: countyTemp, cites: [] });

        break;

      case "cities":
        let cityTemp = [];
        if (checked) {
          cityTemp = [
            ...statesFilter.cites,
            {
              name: val,
              abbrev: name,
              values: name + ";" + val,
            },
          ];
        } else {
          cityTemp = statesFilter.cites.filter((item) => item.name !== val);
        }
        setStatesFilter({ ...statesFilter, cites: cityTemp });

        break;
      default:
        break;
    }
  };

  const handleEditFilter = (val, type) => {
    switch (type) {
      case "states":
        let temp = items.filters.filter((item) =>
          item.states.abbrev.includes(val)
        );
        dispatch(getCounties({ name: temp[0].states.abbrev, type: 1 }));
        // dispatch(getCities({ name: temp[0].counties.abbrev, type: 1 }));
        setStatesFilter(...temp);
        setSelectCountries(true);
        setSelectCities(false);
        break;

      case "counties":
        let countytemp = items.filters.filter((item) =>
          item.counties.abbrev.includes(val)
        );
        dispatch(
          getCities({
            name: countytemp[0].counties.abbrev.replace("all-", ""),
            type: 1,
          })
        );
        setStatesFilter(...countytemp);
        setSelectCities(true);
        break;
      default:
        break;
    }
  };

  const handleSelect = (choice) => {
    if (choice === "no") {
      setSelectStates(true);
    } else {
      setSelectStates(false);
      setSelectCountries(false);
      setSelectCities(false);
      onAction({ filters: [] });
    }
  };

  const handleAssessment = (v) => {
    setAssesment(v === "yes");
  };

  const handleDeleteQues = (item) => {
    let temp = items.questions;
    onAction({ questions: temp.filter((i) => i.question !== item.question) });
  };

  const handleDeleteFilter = (item) => {
    let temp = items.filters.filter((i) => JSON.stringify(i) !== item);

    onAction({
      filters: temp,
    });
  };

  const handleSave = () => {
    let temp = items.filters.filter(
      (i) => statesFilter.counties.name !== i.counties.name
    );
    onAction({ filters: [...temp, statesFilter] });
    setTimeout(() => {
      setStatesFilter({
        states: {},
        counties: {},
        cites: [],
      });
      setSelectStates(false);
      setSelectCities(false);
      setSelectCountries(false);
    }, 1000);
  };

  return (
    <div>
      <div className="mt-5 is-flex is-align-items-center is-justify-content-center">
        <div className="mr-6">
          <CreatePageTitle title="Set up" />
          <div className="mt-3">
            <InputWithLabel
              selected={items.title}
              error={items.error}
              onChange={onAction}
            />
            <div className="is-flex is-align-items-center is-justify-content-space-between mt-4">
              <div>
                <SelectOptionWithLabel
                  value={items.hours}
                  label="Hours Credit"
                  options={creditHours}
                  property="hours"
                  onChange={(e) => onAction({ hours: e.target.value })}
                />
              </div>
              <div style={{ marginLeft: "-1.3rem" }}>
                <SelectOptionWithLabel
                  value={items.retake}
                  label="Retake"
                  options={retakeOpt}
                  property="hours"
                  onChange={(e) => onAction({ retake: e.target.value })}
                />
              </div>
            </div>
            <div className="mt-3">
              <Upload
                value={items && items.uploadDocs ? items.uploadDocs : null}
                icon={faCloudUploadAlt}
                aftrUploadIcon={faFilePdf}
                title="Upload all the releated Documents"
                acceptedFormats=".pdf,.ppt,.pptx,.txt,.doc,.docx,.xlsx,.xls"
                onDocsUpload={(e) => {
                  onAction({ uploadDocs: [...items.uploadDocs, ...e] });
                }}
                handleEdit={onAction}
              />
            </div>
            <div className="mt-3">
              <Upload
                value={items && items.uploadVideo ? items.uploadVideo : null}
                icon={faVideo}
                aftrUploadIcon={faFileVideo}
                title="Upload your Video in mp4 format"
                acceptedFormats=".mp4"
                onDocsUpload={(e) => {
                  onAction({ uploadVideo: e.File });
                }}
                handleEdit={onAction}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ml-6">
          {/* {items && items.title ? ( */}
          <ListingCard
            title={items.title ? items.title : "Market Place"}
            infoName="Training"
            infoID="#20183"
            background="success"
            color="white"
            showForm={true}
            logo={details ? details.File : null}
            join={true}
            availableText="Available via"
            availableSource="THE MARKETPLACE"
            btnText="Post"
            btnColor="white"
            tags={true}
            btnBackground="dark"
            description={items.description}
            statusText="Edit"
            onClick={() => console.log("hello")}
          />
          {/* // ) : (
          //   <PreviewCard />
          // )} */}
          <div className="mt-5 w-568">
            <TextAreaWithOptions
              value={items.description ? items.description : ""}
              title="Job description"
              error={items.error}
              property={"description"}
              onChange={onAction}
            />
          </div>
        </div>
      </div>
      <div className="is-flex mt-4 mr-block-center">
        <CreatePageTitle title="Acknowledgment" />
      </div>
      <div className="is-flex mt-4 mr-block-center">
        <CheckBox
          val={items.acknowlegdmentVal}
          checked={items.acknowlegdment}
          isInput={true}
          onValueChange={(e) => onAction({ acknowlegdmentVal: e.target.value })}
          onChecked={(e) => onAction({ acknowlegdment: !items.acknowlegdment })}
        />
      </div>

      <div className="mt-5 mr-block-center">
        <ChoiceCardWithButton
          question="Would you like to add an Assesment?"
          onAction={handleAssessment}
        />
      </div>
      <div>
        {assesment ? (
          <div className="is-flex is-justify-content-center is-flex-direction-column mt-5 mr-block-center">
            <CreatePageTitle title="Assessment" />
            <div className="mt-4">
              <TextAreaWithOptions
                value={items.instruction}
                title="Instructions"
                property={"instruction"}
                onChange={onAction}
              />
            </div>
            <div className="mt-5">
              <CreatePageTitle title="Test Rules" />
              <div className="is-flex mt-1">
                <CheckBox
                  values={items.randomQues}
                  val="Randomized Question"
                  onChange={(e) => onAction({ randomQues: !items.randomQues })}
                />
                <CheckBox
                  values={items.randomAns}
                  val="Randomized Answers"
                  onChange={(e) => onAction({ randomAns: !items.randomAns })}
                />
                <CheckBox
                  values={items.retakeTest}
                  val="Require to retake test if failed"
                  onChange={(e) => onAction({ retakeTest: !items.retakeTest })}
                />
              </div>
              <div className="is-flex mt-3">
                <SelectOptionWithLabel
                  value={items.passingScore}
                  label="Passing score %"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return {
                      text: 40 + item * 5,
                      val: 40 + item * 5,
                    };
                  })}
                  onChange={(e) => onAction({ passingScore: e.target.value })}
                />
                <SelectOptionWithLabel
                  value={items.attempts}
                  label="Attempts"
                  options={attempts}
                  onChange={(e) => onAction({ attempts: e.target.value })}
                />
              </div>
              <div style={{ marginTop: "1.8rem" }}>
                <CheckBox
                  values={items.showWrongAns}
                  val="Show wrong answers after test submitted"
                  onChange={(e) =>
                    onAction({ showWrongAns: !items.showWrongAns })
                  }
                />
              </div>
              <div>
                {addQuestionBtn && (
                  <button
                    className="button w-141 h-40 is-primary is-size-5 has-text-weight-bold mt-5"
                    onClick={() =>
                      onAction({ data: null, type: "save" }, "question")
                    }
                  >
                    Add Question
                  </button>
                )}
              </div>
            </div>
            <div className="is-flex is-flex-wrap-wrap">
              <ShowQuestions
                items={items}
                onAction={onAction}
                handleDeleteQues={handleDeleteQues}
              />
            </div>
          </div>
        ) : null}
        <div
          className="mr-block-center"
          style={{
            marginTop: "2.5rem",
          }}
        >
          <ChoiceCardWithButton
            question="Would you like this content to go to your total coverage area?"
            onAction={handleSelect}
          />
        </div>
      </div>
      <div
        className="is-flex"
        style={{ marginLeft: "calc(50% - 37rem)", marginTop: "2rem" }}
      >
        {selectStates && (
          <div>
            <CheckboxCard
              value={
                statesFilter.states && statesFilter.states.abbrev
                  ? statesFilter.states.abbrev
                  : null
              }
              selectedList={items.filters}
              heading="Select States"
              state={statesList.map((item) => {
                return {
                  text: item.SateName,
                  val: item.Abbrebiation,
                  extraData: item.StateType,
                };
              })}
              property="states"
              onAction={handleStateFilter}
              onEdit={handleEditFilter}
            />
          </div>
        )}
        {selectCountries && countiesList && countiesList.length > 0 && (
          <div style={{ marginLeft: "2rem" }}>
            <CheckboxCard
              value={
                statesFilter.counties && statesFilter.counties.abbrev
                  ? statesFilter.counties.abbrev
                  : null
              }
              selectedList={items.filters}
              heading="Select Countries"
              state={countiesList.map((item) => {
                return {
                  text: item.CountyName,
                  val: item.OptionsVal
                    ? item.OptionsVal
                    : item.CountyId + "_" + item.StateName,
                  extraData: item.CountyType,
                };
              })}
              isCountry={true}
              property="counties"
              onAction={handleStateFilter}
              onEdit={handleEditFilter}
            />
          </div>
        )}
        {selectCities && citiesList && citiesList.length > 0 && (
          <div style={{ marginLeft: "2rem" }}>
            <CheckboxCard
              value={
                statesFilter.cites && statesFilter.cites
                  ? statesFilter.cites
                  : null
              }
              heading="Select Cities"
              state={citiesList.map((item) => {
                return {
                  text: item.CityName,
                  val: item.OptionsVal
                    ? item.OptionsVal
                    : item.CityId + "_" + item.CountyId + "_" + item.StateName,
                  extraData: "",
                };
              })}
              isArray
              hideAll
              property="cities"
              onAction={handleStateFilter}
              onEdit={handleEditFilter}
            />
          </div>
        )}
      </div>
      {selectStates && (
        <div>
          <div
            className="mt-5 is-flex is-flex-direction-row-reverse mr-block-center"
            style={{
              marginTop: "2rem",
            }}
          >
            <button
              className="button is-uppercase is-primary has-text-weight-bold is-size-5 ls-1 w-125"
              // disabled={disabled}
              onClick={() => {
                handleSave();
              }}
            >
              Save
            </button>{" "}
            <button
              className="button is-uppercase is-primary has-text-weight-bold is-size-5 ls-1 w-125 mr-4"
              // disabled={disabled}
              onClick={() => {
                let temp = items.filters.filter(
                  (i) => statesFilter.counties.name !== i.counties.name
                );
                onAction({ filters: [...temp, statesFilter] });
                setTimeout(() => {
                  setStatesFilter({
                    states: {},
                    counties: {},
                    cites: [],
                  });
                  setSelectCities(false);
                  setSelectCountries(false);
                }, 1000);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {!selectStates &&
        items.filters &&
        items.filters.map((item, index) => {
          return (
            <div className="mt-4">
              <CoverageAreaShow
                items={item}
                handleDelete={handleDeleteFilter}
              />
            </div>
          );
        })}
      <footer className="mt-5 pt-2 mr-block-center">
        <Footer
          items={items}
          // disabled={!items.acknowlegdment}
          onAction={onAction}
        />
      </footer>
    </div>
  );
};

export default EditorDropZone;

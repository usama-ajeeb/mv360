import React, { useState } from "react";
import {
  cardImageOne,
  cardImageTwo,
  cardImageThree,
  cardImageFour,
  cardImageFive,
} from "../../assets/images";
import { useHistory, useParams } from "react-router-dom";
import EditorDropZone from "../../app/components/TextEditor/EditorDropZone";
import { CardWithImage, QuestionModal } from "../../app/components";
import { useSelector, useDispatch } from "react-redux";
import {
  getGroups,
  getSubGroups,
  getCompaniesDetail,
  getGroupsSubCategory as getSubCategory,
} from "../../app/redux/selector";
import {
  uploadDocs,
  getSubGroupCategories,
  saveCommunication,
  getCommunication,
} from "../../app/redux/actions";

const cardImgArr = [
  {
    label: "Property Inspector",
    img: cardImageOne,
    label: "Tips for Getting Work",
    border: true,
  },
  {
    img: cardImageTwo,
    label: "Property Inspection",
  },
  {
    img: cardImageThree,
    label: "Property Preservation",
  },
  {
    img: cardImageFour,
    label: "Property Maintenance",
  },
  {
    img: cardImageFive,
    label: "Repair & Rehab",
  },
];

const CreateTraining = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const groups = useSelector(getGroups).filter(
    (item) => item.categoryName === "Market Place"
  )[0];
  const subGroups = useSelector(getSubGroups);
  const companyDetail = useSelector(getCompaniesDetail);
  const subGroupCategory = useSelector(getSubCategory);
  const [selected, setSelected] = useState(subGroups[0]);
  const [updatedValues, setUpdatedValues] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedQuesIndex, setSelectedQuesIndex] = useState(-1);
  const [data, setData] = React.useState({
    title: "",
    hours: 0.0,
    retake: 0.0,
    uploadDocs: [],
    uploadVideo: [],
    description: "",
    acknowlegdment: false,
    acknowlegdmentVal: "I have Read And Understood the Document",
    instruction: "",
    randomQues: false,
    randomAns: false,
    retakeTest: false,
    passingScore: 45,
    attempts: 1,
    showWrongAns: false,
    error: false,
    questions: null,
    filters: [],
    vendorTypeID: companyDetail.CompanyVendorTypeList.filter(
      (item) => item.VendorTypeName === "Property Preservation"
    )[0].VendorTypeId,
  });
  const [isQuestion, setQuestModal] = React.useState(false);

  React.useEffect(() => {
    if (subGroupCategory) {
      setSubCategory(
        subGroupCategory.filter((item) => item.categoryName === "Training")[0]
      );
    }
  }, [subGroupCategory]);

  React.useEffect(() => {
    if (subGroups) {
      dispatch(
        getSubGroupCategories({
          groupId: groups.id,
          categoryId: subGroups[0].id,
        })
      );
    }
    if (id) {
      dispatch(getCommunication(1927, onGetValues));
    }
  }, []);

  const handleChoice = (item) => {
    dispatch(
      getSubGroupCategories({ groupId: groups.id, categoryId: item.id })
    );
    setSelected(item);
  };

  const handleUpdates = (item, type) => {
    console.log(data);
    switch (type) {
      case "stage":
        if (data.title !== "" && data.description !== "") {
          dispatch(
            saveCommunication(
              {
                detail: data,
                group: groups,
                subCategory,
                stage: true,
              },
              onSuccess
            )
          );
          setData({ ...data, error: false });
        } else {
          setData({ ...data, error: true });
        }
        break;

      case "post":
        if (data.title !== "" && data.description !== "") {
          dispatch(
            saveCommunication(
              { detail: data, group: groups, subCategory },
              onSuccess
            )
          );
          setData({ ...data, error: false });
        } else {
          setData({ ...data, error: true });
        }
        break;

      case "question":
        if (item && item.type === "edit") {
          setSelectedQuesIndex(item.data);
        } else {
          setSelectedQuesIndex(-1);
        }
        setTimeout(
          () =>
            setQuestModal((prevState) => {
              return !prevState;
            }),
          1000
        );
        break;

      default:
        setData({ ...data, ...item });
        if ("uploadDocs" in item) {
          dispatch(uploadDocs(item.uploadDocs));
        }
        if ("uploadVideo" in item) {
          dispatch(uploadDocs(item.uploadVideo));
        }
    }
  };

  const onSuccess = () => {
    history.push("/traininglibrary");
  };

  const onGetValues = (val) => {
    setData({
      ...data,
      title: val.DocTitle,
      retake: parseInt(val.Retake),
      hours: val.HourOfCredit,
      description: val.Content !== null ? "" : val.Content,
      instruction: val.Instruction,
      randomQues: val.RandQues,
      randomAns: val.RandAns,
      retakeTest: val.ReqReTest,
      passingScore: parseInt(val.PassingScore),
      attempts: val.Attempts,
      showWrongAns: val.ShowWrongeAns,
      uploadDocs: val.contentsDetails.map((item) => {
        return {
          name: item.Filetitle,
          path: item.FileLoc,
        };
      }),
    });

    dispatch(
      getSubGroupCategories({ groupId: groups.id, categoryId: val.ReferenceId })
    );

    setSelected(
      subGroups.map((item) => {
        if (item.id === val.ReferenceId) {
          return item;
        }
      })
    );
  };
  return (
    <div className="has-background-light">
      <div className="has-text-centered">
        <h4 style={{ fontSize: "4.5rem" }} className="has-text-dark">
          CREATE TRAINING
        </h4>
        <span className="has-text-dark is-size-1">"Feet On The Street"</span>
      </div>
      <div className="is-flex is-justify-content-center is-align-items-center mt-6">
        {subGroups.map((c, i) => (
          <CardWithImage
            key={i}
            img={cardImgArr[i].img}
            label={c.referenceName}
            border={c.id === selected.id}
            onClick={() => handleChoice(c)}
          />
        ))}
      </div>

      <EditorDropZone
        addQuestionBtn
        items={data}
        details={companyDetail}
        onAction={handleUpdates}
      />

      {isQuestion && (
        <QuestionModal
          items={data.questions}
          selected={selectedQuesIndex}
          handleValues={handleUpdates}
          onClick={setQuestModal}
        />
      )}
    </div>
  );
};
export default CreateTraining;

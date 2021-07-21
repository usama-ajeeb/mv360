import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getGroups,
  getSubGroups,
  getGroupsSubCategory as getSubCategory,
} from "../../app/redux/selector";
import {
  getSubGroupCategories,
  saveCommunication,
} from "../../app/redux/actions";

import {
  PageWithCards,
  PreviewCard,
  InputWithLabel,
  TextAreaWithOptions,
  CreatePageTitle,
  ChoiceCardWithButton,
  Footer,
  CheckboxCard,
  DateWithInput,
  ListingCard,
  CardWithImage,
} from "../../app/components";
import { getCompaniesDetail } from "../../app/redux/selector";
import { CalendarInputNew } from "../../app/common";
import {
  cardImageOne,
  cardImageTwo,
  cardImageThree,
  cardImageFour,
  cardImageFive,
} from "../../assets/images";
import EditorDropZonePD from "../../app/components/TextEditor/EditorDropZonePD";

const cardImgArr = [
  {
    img: cardImageOne,
    label: "Property Inspection",
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
const PostAd = ({ tags }) => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const groups = useSelector(getGroups).filter(
    (item) => item.categoryName === "Market Place"
  )[0];

  const subGroups1 = useSelector(getSubGroups);
  const subGroupCategory = useSelector(getSubCategory);
  const companyDetail = useSelector(getCompaniesDetail);
  const [showStates, setShowStates] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  const [subCategory, setSubCategory] = useState([]);
  const [selected, setSelected] = useState(subGroups1[0]);
  const [data, setData] = useState({
    title: "",
    date: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [data1, setData1] = React.useState({
    error: false,
    questions: null,
    filters: [],
    vendorTypeID: companyDetail.CompanyVendorTypeList.filter(
      (item) => item.VendorTypeName === "Property Preservation"
    )[0].VendorTypeId,
  });

  const history = useHistory();

  const handleChoice = (choice) => {
    if (choice === "no") {
      setShowStates(true);
    } else {
      setShowStates(false);
      setShowCountries(false);
    }
  };

  React.useEffect(() => {
    if (subGroupCategory) {
      setSubCategory(
        subGroupCategory.filter((item) => item.categoryName === "Training")[0]
      );
    }
  }, [subGroupCategory]);

  React.useEffect(() => {
    if (subGroups1) {
      dispatch(
        getSubGroupCategories({
          groupId: groups.id,
          categoryId: subGroups1[0].id,
        })
      );
    }
  }, []);

  const handleChoice1 = (item) => {
    dispatch(
      getSubGroupCategories({ groupId: groups.id, categoryId: item.id })
    );
    setSelected(item);
  };

  const handleUpdate = (v) => {
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

    console.log({ ...data, ...v });
    setData({ ...data, ...v });
  };
  const handleSelect = (v) => {
    console.log(v);
    setSelected(v);
    console.log("handtest");
  };

  const handleStateFilter = (val, name, type) => {
    if (type === "states") {
      if (name.includes("all")) {
        setShowCountries(false);
      } else {
        setShowCountries(true);
      }
    } else {
      console.log("Counties", val, name);
    }
  };

  // start
  const handleUpdates1 = (item, type) => {
    console.log(data1);
    switch (type) {
      case "stage":
        if (data1.title !== "" && data1.description !== "") {
          dispatch(
            saveCommunication(
              {
                detail: data1,
                group: groups,
                subCategory,
                stage: true,
              },
              onSuccess
            )
          );
          setData1({ ...data1, error: false });
        } else {
          setData1({ ...data1, error: true });
        }
        break;

      case "post":
        if (data1.title !== "" && data1.description !== "") {
          dispatch(
            saveCommunication(
              { detail: data1, group: groups, subCategory },
              onSuccess
            )
          );
          setData1({ ...data1, error: false });
        } else {
          setData1({ ...data1, error: true });
        }
        break;

      default:
        setData1({ ...data1, ...item });
    }
  };
  // end

  const onSuccess = () => {
    history.push("/traininglibrary");
  };
  return (
    <div className="has-background-light">
      <PageWithCards
        selected={selected}
        post={true}
        title="POST A NEW AD"
        cardImgArr={cardImgArr}
        onClick={handleSelect}
      />

      <div className="mt-5 is-flex is-align-items-center is-justify-content-center">
        <div className="mr-6">
          <CreatePageTitle title="Content" />
          <div className="mt-3">
            <InputWithLabel selected={selected} onChange={handleUpdate} />
            <div className="mt-4 w-516">
              <TextAreaWithOptions
                title="Ad Copy"
                value=""
                post={true}
                property={"description"}
                onChange={handleUpdate}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ml-6 w-519 ">
          {selected && selected.referenceName ? (
            <ListingCard
              date={data.startDate}
              title={
                data && data.title
                  ? data.title
                  : selected && selected.referenceName
                  ? selected.referenceName
                  : "Market Place"
              }
              infoName="Training"
              infoID="#20183"
              background="success"
              color="white"
              showForm={true}
              join={true}
              logo={companyDetail ? companyDetail.File : null}
              availableText="Available via"
              availableSource="THE MARKETPLACE"
              btnText="Post"
              btnColor="white"
              tags={true}
              btnBackground="dark"
              statusText="Edit"
              description={data.description}
              onClick={() => console.log("hello")}
            />
          ) : (
            <PreviewCard />
          )}
        </div>
      </div>
      <div
        className="mt-2 w-516 is-flex is-justify-content-space-between"
        style={{
          marginLeft: "calc(50% - 35rem)",
        }}
      >
        <CalendarInputNew
          label={"Start Date"}
          onChange={(e) => {
            handleUpdate({ startDate: e.date });
          }}
        />
        <CalendarInputNew
          label={"End Date"}
          onChange={(e) => {
            handleUpdate({ endDate: e.date });
          }}
        />
      </div>
      {/* <div
        className="is-flex is-justify-content-flex-start is-flex-direction-column mt-6"
        style={{
          marginLeft: "calc(50% - 35rem)",
        }}
      >
        <ChoiceCardWithButton
          onAction={handleChoice}
          question="Would you like this content to go to your total coverage area?"
        />
      </div> */}
      <EditorDropZonePD
        addQuestionBtn
        items={data1}
        details={companyDetail}
        onAction={handleUpdates1}
      />
      {/* EditorDropZonePD */}
      {/* <div
        className="is-flex"
        style={{ marginLeft: "calc(50% - 35rem)", marginTop: "2rem" }}
      >
        {showStates && (
          <div>
            <CheckboxCard
              heading="Select States"
              state={[
                { text: "Adair County, IA", val: "adair" },
                { text: "Adams County, IA", val: "adams" },
              ]}
              property="states"
              onAction={handleStateFilter}
            />
          </div>
        )}
        {showCountries && (
          <div style={{ marginLeft: "2rem" }}>
            <CheckboxCard
              heading="Select Counties"
              state={[
                { text: "Adair County, IA", val: "adair" },
                { text: "Adams County, IA", val: "adams" },
              ]}
              property="counties"
              onAction={handleStateFilter}
            />
          </div>
        )}
      </div> */}
      <footer
        className="mt-5 pt-2"
        style={{
          marginLeft: "calc(50% - 35rem)",
          marginRight: "calc(50% - 35rem)",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};
export default PostAd;

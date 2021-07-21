import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ListingCard,
  Footer,
  Titlebar,
  ChoiceCardWithButton as ChoiceCard,
  CheckboxCard,
} from "../../app/components";

const SingleListingPage = () => {
  const [showStates, setShowStates] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const history = useHistory();
  const handleChoice = (choice) => {
    if (choice === "no") {
      setShowStates(true);
    } else {
      setShowStates(false);
      setShowCountries(false);
    }
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
  return (
    <div
      className={`has-background-light ${showStates ? "" : "is-full-height"}`}
    >
      <Titlebar noItems={true} />
      <div className="is-flex is-justify-content-center">
        <div
          className="h-276 w-578 mt-6 mr-5"
          style={{
            border: "5px solid #0032FC",
            borderRadius: 6,
            boxShadow: "0px 0px 30px 0px #00000026",
          }}
        >
          <ListingCard
            title="Market place"
            infoName="Training"
            infoID="#20183"
            background="success"
            color="white"
            showForm={showStates}
            join={true}
            availableText="Available via"
            availableSource="THE MARKETPLACE"
            btnText="Post"
            btnColor="white"
            tags={true}
            btnBackground="dark"
            statusText="Edit"
            onClick={() => history.push("/createtraining")}
            isBtnHide
          />
        </div>
        <div className="h-276 w-578 mt-6 ml-3">
          <ListingCard
            title="Market Place"
            infoName="Training"
            infoID="#20083"
            background="success"
            color="white"
            join={true}
            tags={true}
            availableText="Available via"
            availableSource="THE MARKETPLACE"
            btnText="Post"
            btnColor="white"
            btnBackground="dark"
            statusText="Edit"
            onClick={() => history.push("/createtraining")}
          />
        </div>
      </div>
      <div style={{ marginTop: "6rem", marginLeft: "calc(50% - 37rem)" }}>
        <ChoiceCard
          onAction={handleChoice}
          question="Would you like this content to go to your total coverage area?"
        />
      </div>
      <div
        className="is-flex"
        style={{ marginLeft: "calc(50% - 37rem)", marginTop: "2rem" }}
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
      </div>
      <div style={{ margin: "3.5rem calc(50% - 37rem) 0" }}>
        <Footer />
      </div>
    </div>
  );
};
export default SingleListingPage;

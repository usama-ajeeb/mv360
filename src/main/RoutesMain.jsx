import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MarketPlace from "./Pages/MarketPlace";
import TrainingCenter from "./Pages/TrainingCenter";
import CreateTraining from "./Pages/CreateTraining";
import PostAd from "./Pages/PostAd";
import SelectOptions from "./Pages/SelectOptions";
import DashBoard from "../app/components/Dashboard/Dashboard";
import TrainingLibrary from "./Pages/TrainingLibrary";
import PostingAd from "./Pages/PostingAd";
import SingleListingPage from "./Pages/SingleListingPage";
import { Titlebar } from "../app/components";

const RoutesMain = ({
  paidTier,
  selectedDesign,
  isUserLogin,
  handleTabChange,
}) => {
  return (
    <>
      <Switch>
        <Route path="/marketplace" exact>
          <MarketPlace paidTier={paidTier} />
        </Route>
        <Route path="/trainingcenter" exact>
          <TrainingCenter isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
        <Route path="/ads" exact>
          <PostAd isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
        <Route path="/option" exact>
          <SelectOptions />
        </Route>
        <Route path="/createTraining" exact>
          <CreateTraining isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
        <Route path="/createTraining/:id" exact>
          <CreateTraining isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
        <Route path="/dashboard" exact>
          <DashBoard isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
        <Route path="/traininglibrary" exact>
          <TrainingLibrary isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
        <Route path="/postad" exact>
          <PostingAd isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
        <Route path="/singlelisting" exact>
          <SingleListingPage isUser={isUserLogin} onAction={handleTabChange} />
        </Route>
      </Switch>
      {/* <p>Choose an Option to begin</p> */}
    </>
  );
};

export default RoutesMain;

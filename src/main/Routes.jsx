import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MarketPlace from "./Pages/MarketPlace";
import TrainingCenter from "./Pages/TrainingCenter";
import CreateTraining from "./Pages/CreateTraining";
import PostAd from "./Pages/PostAd";
import SelectOptions from "./Pages/SelectOptions";
import DashBoard from "../app/components/Dashboard/Dashboard";
import Tier from "./Tier";
import RoutesMain from "./RoutesMain";

const Routes = ({ paidTier, selectedDesign, isUserLogin, handleTabChange }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Tier handleTabChange={handleTabChange} paidTier />
      </Route>
      <Route path="/dashboard" exact>
        <DashBoard paidTier />
      </Route>
      <RoutesMain
        paidTier={paidTier}
        selectedDesign={selectedDesign}
        isUserLogin={isUserLogin}
        handleTabChange={handleTabChange}
      />
    </Switch>
  );
};

export default Routes;

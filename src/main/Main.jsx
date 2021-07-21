import React, { useState } from "react";
import { Titlebar, TierCard, PageWithCards } from "../app/components";
import Routes from "./Routes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => {
  const [selectedDesign, setSelectedDesign] = useState("/marketplace");
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [paidTier, setPaidTier] = useState(false);

  const handleTabChange = (v, t) => {
    if (t === "design") {
      setSelectedDesign(v);
    } else {
      setPaidTier(v);
    }
  };
  return (
    <Router>
      <Routes
        paidTier={paidTier}
        isUserLogin={isUserLogin}
        selectedDesign={selectedDesign}
        handleTabChange={handleTabChange}
      />
    </Router>
  );
};

export default Main;

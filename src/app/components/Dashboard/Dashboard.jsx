import React from "react";
import TopBar from "./TopBar";
import Profile from "./Profile";
import Tabs from "./Tabs";
import MyProfile from "./MyProfile";

const Dashboard = ({ paidTier }) => {
  return (
    <>
      <TopBar />
      <Profile />
      <Tabs />
      <MyProfile paidTier />
    </>
  );
};
export default Dashboard;

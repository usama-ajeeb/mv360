import React from "react";
import { PikPng } from "../../../assets/images/index";

const Profile = () => {
  return (
    <div className="is-flex is-align-items-center ml-4 dashboard-profile">
      <div className="ml-1">
        <img src={PikPng} alt="user-img" />
      </div>
      <div className="ml-3 mt-2">
        <h4 className="has-text-dark is-size-2 has-text-weight-semibold">
          Jack Peterson
        </h4>
        <span className="has-text-centered mt-2 is-navyblue">
          <p className="has-text-white is-size-7 has-text-weight-bold is-family-secondary">
            Independent Contractor
          </p>
        </span>
      </div>
    </div>
  );
};
export default Profile;

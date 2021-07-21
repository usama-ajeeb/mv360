import React from "react";
import { VendorView } from "../../../assets/images/index";
function TopBar() {
  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between dashboard-topbar">
      <div className="mt-2 ml-5">
        <img src={VendorView} alt="logo" />
      </div>
      <div className="mr-5">
        <button className="button is-size-6 mr-3 is-family-secondary">
          William
        </button>
        <button className="button is-size-6 mr-3 is-family-secondary">
          My Profile
        </button>
        <button className="button is-primary is-size-6 is-family-secondary">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default TopBar;

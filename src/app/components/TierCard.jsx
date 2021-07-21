import React from "react";
import { Link } from "react-router-dom";

const TierBar = ({ label, route }) => {
  return (
    <Link to={route}>
      <div className="card w-945 h-338 is-flex is-align-items-center is-justify-content-center is-pointer">
        <div className="card-content ">
          <div className="content ">
            <span
              style={{ fontSize: "6.2rem" }}
              className="has-text-weight-bold has-text-dark"
            >
              {label}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TierBar;

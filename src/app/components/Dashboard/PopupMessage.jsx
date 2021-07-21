import React from "react";
import { Link } from "react-router-dom";
const PopupMessage = () => {
  return (
    <Link to={"/marketplace"}>
      <div className="dashboard-popup-msg is-size-4 is-flex is-justify-content-center is-align-items-center mt-3 is-pointer">
        <div className="has-text-centered">
          <p className="ls-2">Checkout</p>
          <p className="is-uppercase has-text-weight-bold ls-2">
            The MarketPlace
          </p>
        </div>
      </div>
    </Link>
  );
};
export default PopupMessage;

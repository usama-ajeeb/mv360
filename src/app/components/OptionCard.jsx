import React from "react";
import { Link } from "react-router-dom";

const OptionCard = ({ item }) => {
  return (
    <Link to={item.route}>
      <div className="option-card h-100 w-268 has-text-dark is-size-4 is-flex is-align-items-center is-justify-content-center is-flex-direction-column has-background-white is-pointer">
        <span className="has-text-weight-bold ls-2">{item.title}</span>
        <span className="ls-2 is-size-5">FOR</span>
        <span className="ls-2">{item.subTitle}</span>
      </div>
    </Link>
  );
};
export default OptionCard;

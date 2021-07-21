import React from "react";

const ChoiceCard = ({ onAction, question }) => {
  return (
    <div className="choice-card">
      <h4 className=" has-text-dark is-size-3 ls-2">{question}</h4>
      <div className="mt-4">
        <button
          className="button has-text-weight-semibold is-uppercase is-success is-size-7 mr-2 ls-1"
          onClick={() => onAction("yes")}
        >
          Yes
        </button>
        <button
          className="button has-text-weight-semibold is-uppercase is-dark is-size-7 ls-1 "
          onClick={() => onAction("no")}
        >
          No
        </button>
      </div>
    </div>
  );
};
export default ChoiceCard;

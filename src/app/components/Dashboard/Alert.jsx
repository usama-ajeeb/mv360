import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-regular-svg-icons";

const Alert = ({
  title,
  text,
  date,
  background,
  titleColor,
  textColor,
  tagBackground,
}) => {
  return (
    <div
      className="mt-2 mx-4 is-flex is-justify-content-space-between dashboard-alert"
      style={{ background: background }}
    >
      <div className="is-flex is-align-items-center">
        <div className="is-flex is-flex-direction-column m-4">
          <span
            className="has-text-weight-bold is-size-5 is-family-secondary"
            style={{ color: titleColor }}
          >
            {title}
          </span>
          <span className="is-size-6 mt-1" style={{ color: textColor }}>
            {text}
          </span>
        </div>
        <div
          className="mt-5 has-text-white is-size-6 px-1 dashboard-alert-tag"
          style={{ background: tagBackground }}
        >
          <span className="has-text-weight-bold">{date}</span>
        </div>
      </div>
      <div>
        <button className="button mt-2 has-text-dark">
          <FontAwesomeIcon icon={faTimes} size="sm" />
        </button>
      </div>
    </div>
  );
};
export default Alert;

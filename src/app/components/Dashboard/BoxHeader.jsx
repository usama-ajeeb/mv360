import React from "react";

const PopupHeader = ({ title, view }) => {
  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between is-full-width">
      <h4 className="has-text-weight-bold is-size-4 has-text-info ml-3 is-family-secondary">
        {title}
      </h4>
      {view && (
        <button
          className="button is-navyblue has-text-weight-semibold is-size-6 mr-4 has-text-white h-20"
          style={{ borderRadius: 50, lineHeight: 0 }}
        >
          View All
        </button>
      )}
    </div>
  );
};
export default PopupHeader;

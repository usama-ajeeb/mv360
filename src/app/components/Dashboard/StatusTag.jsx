import React from "react";

const StatusTag = ({ name, number }) => {
  return (
    <div className="is-flex is-align-items-center is-justify-content-space-between dashboard-status-tags m-2 mt-3">
      <div className="ml-3">
        <p className="has-text-weight-semibold">{name}</p>
      </div>
      <div className="is-flex is-full-height">
        <div className="dashboard-status-tags-line"></div>
        <div className="is-flex is-align-items-center mxs-sm">
          <p className="has-text-weight-semibold">{number}</p>
        </div>
      </div>
    </div>
  );
};
export default StatusTag;

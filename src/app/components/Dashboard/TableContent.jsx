import React from "react";

const TableContent = ({
  tagName,
  tagDate,
  clientName,
  contactName,
  contactNumber,
  actionText,
  background,
  btnBg,
}) => {
  return (
    <tr>
      <td>
        <div className="is-flex is-flex-direction-column mt-3 mr-6 is-size-6">
          <span
            className="py-1 px-1 has-text-centered dashboard-table-tag has-text-white is-family-secondary"
            style={{ background: background }}
          >
            {tagName}
          </span>
          <span className="has-text-dark is-size-5 is-family-secondary">
            {tagDate}
          </span>
        </div>
      </td>
      <td>
        <div className="mt-3 mr-6 is-family-secondary">
          <span className="has-text-info is-size-5">{clientName}</span>
        </div>
      </td>
      <td>
        <div className="mt-3 mr-6 is-size-5 is-flex is-flex-direction-column is-family-secondary">
          <span className="has-text-info">{contactName}</span>
          <span className="has-text-dark">{contactNumber}</span>
        </div>
      </td>
      <td>
        <div className="mt-3 is-size-5">
          <button
            className="button py-0 px-3 has-text-weight-medium dashboard-table-button has-text-white"
            style={{ background: "#3fa5c3" }}
          >
            {actionText}
          </button>
        </div>
      </td>
    </tr>
  );
};
export default TableContent;

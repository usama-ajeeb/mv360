import React from "react";

const Footer = ({ items, disabled, onAction }) => {
  const isJustify =
    items && items.error
      ? "is-justify-content-space-between"
      : " is-justify-content-flex-end ";
  return (
    <div className={`${isJustify} is-flex is-align-items-center`}>
      {items && items.error && (
        <h2 className="has-text-danger is-flex is-justify-content-flex-end is-size-4">
          Please fill all the Required Field
        </h2>
      )}
      <div className="is-flex is-justify-content-flex-end _footer">
        <div className="py-5 mt-1">
          <button
            className="button is-uppercase is-primary has-text-weight-bold is-size-5 ls-1 w-125"
            disabled={disabled}
            onClick={() => onAction({}, "stage")}
          >
            Post
          </button>
          <button
            className="button is-uppercase is-primary has-text-weight-bold ml-4 is-size-5 ls-1 w-125"
            disabled={disabled}
            onClick={() => onAction({}, "post")}
          >
            Stage
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;

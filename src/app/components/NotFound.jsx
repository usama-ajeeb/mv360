import React from "react";

const NotFound = () => {
  return (
    <div
      className="is-full-width has-background-light is-flex is-justify-content-center has-text-dark"
      style={{ minHeight: 125 }}
    >
      <span style={{ fontSize: "2.25rem" }} className="has-text-weight-medium">
        We couldn’t find any Training for you <br />
        <a className="has-text-primary">Joins Today</a> to expand your search
      </span>
    </div>
  );
};
export default NotFound;

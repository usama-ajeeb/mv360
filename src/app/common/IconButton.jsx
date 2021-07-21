import React from "react";

const IconButton = ({ label, icon, onClick }) => {
  return (
    <button
      className="button is-primary has-border-radius-0 w-189 has-background-white has-border-width-3 h-40"
      onClick={onClick}
    >
      <span className="icon has-text-dark mr-1">
        <i className={icon}> </i>
      </span>
      <span className="is-size-5 is-letter-spaced-5 has-text-primary has-text-weight-semibold">
        {label}
      </span>
    </button>
  );
};

export default IconButton;

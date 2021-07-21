import React from "react";
const CheckBox = ({ val, checked, isInput, onValueChange, onChecked }) => {
  return (
    <div className="box min-content is-flex is-align-items-center h-40 checkbox-with-text mr-3 mb-0">
      <input type="checkbox" onClick={onChecked} checked={checked} />
      {isInput ? (
        <input
          class="input is-normal ml-3 is-family-primary is-size-5 has-border-none w-420"
          type="text"
          value={val}
          onChange={onValueChange}
          style={{ boxShadow: "none" }}
        />
      ) : (
        <span className="ml-3 has-text-dark is-family-secondary">{val}</span>
      )}
    </div>
  );
};

export default CheckBox;

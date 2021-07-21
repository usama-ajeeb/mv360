import React from "react";

const SelectOptionWithLabel = ({
  label,
  value,
  property,
  options,
  onChange,
}) => {
  return (
    <div className="has-text-dark slct-opts-with-label w-253">
      <span className="is-size-5 ls-1 is-family-secondary">{label}</span>
      <div className="mt-1">
        <select
          className="has-background-white is-full-width is-size-5 pl-3 has-text-dark ls-1 is-family-secondary"
          onChange={onChange}
        >
          {options.map((o, i) => (
            <option key={i} value={o.val} selected={value === o.val}>
              {o.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default SelectOptionWithLabel;

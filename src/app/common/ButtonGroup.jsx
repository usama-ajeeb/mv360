import React from "react";
const options = [
  { text: "All", value: "all", color: "has-text-primary" },
  { text: "In Progress", value: "progress" },
  { text: "New", value: "new" },
  { text: "Completed", value: "completed" },
  { text: "Archived", value: "archived", color: "has-text-danger" },
];
const ButtonGroup = () => {
  return (
    <div class="field has-addons mb-0">
      {options.map((items, index) => {
        return (
          <p class="control is-flex is-align-items-center" key={index}>
            <button class="button mw-100">
              <span
                className={`has-text-dark has-text-weight-medium is-size-6 ${items.color}`}
              >
                {items.text}
              </span>
            </button>
            {index + 1 === options.length ? null : (
              <div
                style={{ height: "55%", backgroundColor: "#E3E9EB", width: 2 }}
              />
            )}
          </p>
        );
      })}
    </div>
  );
};

export default ButtonGroup;

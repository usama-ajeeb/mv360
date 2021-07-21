import React from "react";
import { IconButton } from "../common";
import { Link, useHistory } from "react-router-dom";
const options = [
  { text: "Market Place", value: "/marketplace" },
  { text: "Training", value: "/trainingcenter" },
];
const Titlebar = ({ noItems }) => {
  const history = useHistory();
  const path = window.location.pathname;
  return (
    <div
      className={`h-70 is-flex is-align-items-center has-bottom-border has-background-white ${noItems &&
        "is-justify-content-flex-end"}`}
    >
      {!noItems && (
        <div className="flex-1 is-flex">
          {options.map((item, index) => (
            <button
              key={index}
              className={`button is-white ${
                path === item.value ? "has-text-primary" : "has-text-dark"
              }  ml-5 is-family-secondary has-text-weight-semibold`}
              onClick={() => history.push(item.value)}
            >
              {item.text}
            </button>
          ))}
        </div>
      )}

      <div className="is-flex mr-5">
        {!noItems && (
          <button
            className="button is-primary has-border-radius-0 w-200 mr-3 h-40"
            onClick={() => {
              path === "/trainingcenter"
                ? history.push("/marketplace")
                : history.push("trainingcenter");
            }}
          >
            <span className="is-size-5 is-letter-spaced-5 has-text-weight-semibold">
              {path === "/trainingcenter"
                ? "LOOKING FOR WORK"
                : "LOOKING FOR TRAINING?"}
            </span>
          </button>
        )}
        <Link to={"/dashboard"}>
          <IconButton label={"MY HOME PAGE"} icon={"far fa-bell"} />
        </Link>
      </div>
    </div>
  );
};

export default Titlebar;

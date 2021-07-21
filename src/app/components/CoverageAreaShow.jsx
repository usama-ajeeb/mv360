import React, { useState } from "react";
import TextAreaWithOptions from "./TextAreaWithOptions";

const QuestionModal = ({ items, handleDelete }) => {
  const [showCountries, setShowCountries] = useState(false);
  const [showCities, setShowCities] = useState(false);

  return (
    <div className="has-background-white has-border-radius-5 is-flex is-flex-direction-column mr-block-center">
      <div className="my-2 is-flex is-flex-direction-column has-background-white has-border-radius-5 ">
        <span className="ml-2 is-flex is-align-items-center has-text-weight-bold">
          <span
            onClick={() => setShowCountries(!showCountries)}
            className="is-pointer is-flex is-align-items-center "
          >
            {" "}
            <span className="icon mr-2">
              {!items.states.abbrev.includes("all") && (
                <i
                  className={
                    showCountries
                      ? "fas fa-chevron-right"
                      : "fas fa-chevron-down"
                  }
                ></i>
              )}
            </span>
            {items.states.name}{" "}
            {items.states.abbrev.includes("all") ? "(Whole State)" : null}
          </span>
          <button
            class="button has-border-none ml-5 has-text-danger"
            onClick={() => handleDelete(JSON.stringify(items))}
          >
            Remove
          </button>
        </span>
        {!items.states.abbrev.includes("all") && showCountries && (
          <span
            className="has-text-black ml-2 has-text-weight-semibold ml-4 is-pointer is-flex is-align-items-center"
            onClick={() => setShowCities(!showCities)}
          >
            {}
            <span class="icon mr-2">
              {!items.counties.abbrev.includes("all") && (
                <i
                  className={
                    showCities ? "fas fa-chevron-right" : "fas fa-chevron-down"
                  }
                ></i>
              )}
            </span>
            {items.counties.name}{" "}
            {items.counties.abbrev.includes("all") ? "(Whole County)" : null}
          </span>
        )}

        <div className="is-flex is-flex-direction-column">
          {showCountries &&
            showCities &&
            items.cites &&
            items.cites.map((item) => {
              return <span className="has-text-black ml-6 ">{item.name}</span>;
            })}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;

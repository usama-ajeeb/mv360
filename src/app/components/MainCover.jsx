import React from "react";
import { House } from "../../assets/images/index";

const MainCover = ({ paidTier }) => {
  return (
    <div className="is-flex is-align-items-center is-justify-content-center">
      <div
        className="is-flex is-flex-direction-column  is-justify-content-center w-586"
        style={{ marginRight: "5.5rem" }}
      >
        <span className="m-h1 has-text-dark ls-2">The Market Place</span>

        <span
          style={{ marginTop: -8, color: "#585858" }}
          className="is-letter-spaced-5 ml-2 has-text-weight-light"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus
          sem, sagitti vitae consequat vitae, efficitur a augue. Suspendisse nec
          maximus dui Praesent a turpis lacinia, maximus quam et, rutrum felis.
        </span>
        {!paidTier ? (
          <button
            className="button is-primary has-border-radius-0 w-205 ml-2 h-46"
            style={{ marginTop: "2.2rem" }}
          >
            <span
              className="is-family-secondary has-text-weight-semibold"
              style={{ fontSize: "1.125rem" }}
            >
              {"JOIN TODAY"}
            </span>
          </button>
        ) : null}
      </div>

      <div>
        <img
          src={House}
          style={{ transform: "translateY(-5%)", marginLeft: "5.5rem" }}
        />
      </div>
    </div>
  );
};

export default MainCover;

import React, { useState } from "react";
import { PikPng } from "../../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/pro-light-svg-icons";
import Moment from "react-moment";
import Calendar from "react-calendar";

const Listing = ({
  infoName,
  infoID,
  training,
  title,
  btnText,
  statusText,
  join,
  description,
  availableText,
  availableSource,
  tags,
  logo,
  startTraining,
  preview,
  background,
  color,
  btnColor,
  onClick,
  showForm,
  btnBackground,
  handleBtnClick,
  isBtnHide,
  date,
}) => {
  console.log(date);

  const newDate = new Date().toISOString().split("T")[0];

  if (newDate === date) {
    console.log(true);
  } else {
    console.log(false);
  }

  return (
    <div className="listing-card has-background-white w-568 is-full-height">
      <header className="has-background-light is-flex is-justify-content-space-between is-align-items-center h-46">
        <div className="is-flex is-align-items-center">
          <p className="has-text-dark is-size-5 has-text-weight-semibold mr-2 ml-4">
            {title}
          </p>
          {tags && (
            <div className="is-flex">
              <span className="has-background-success listing-card-tag is-flex is-align-items-center mr-2 h-14">
                <p className="px-1 is-uppercase has-text-weight-semibold has-text-white is-family-secondary">
                  New
                </p>
              </span>

              {newDate > date ? (
                <span className="has-background-primary listing-card-tag is-flex is-align-items-center">
                  <p className="px-2 is-uppercase has-text-weight-semibold has-text-white is-family-secondary">
                    Immediate Openings!
                  </p>
                </span>
              ) : null}
            </div>
          )}
        </div>
        <div className="listing-card-info-tag w-142 h-24 is-size-7 is-flex is-justify-content-center is-align-items-center mr-4">
          <span
            className={`is-flex is-align-items-center is-justify-content-center info-name w-87 has-background-${background} has-text-${color}`}
          >
            <p className="has-text-weight-semibold ls-1">{infoName}</p>
          </span>
          <span className="has-background-dark is-flex is-align-items-center is-justify-content-center info-id w-55 has-text-light">
            <p>{infoID}</p>
          </span>
        </div>
      </header>
      {!join ? (
        <div
          className={`is-flex is-justify-content-center is-align-items-center listing-card-join ${
            preview ? "h-85" : "h-102"
          }`}
        >
          <button className="button is-dark is-uppercase has-text-weight-semibold is-size-7 ls-1 w-148">
            Join to view
          </button>
        </div>
      ) : (
        <div className="is-flex is-justify-content-left listing-card-join pt-4 pl-4 h-102">
          <div className="listing-card-join-img w-75 h-75 is-flex is-align-items-center">
            <img src={logo ? logo : PikPng} alt="pk-png" />
          </div>
          <div className="has-text-dark ml-3 is-family-secondary">
            <p className="is-size-4 has-text-weight-semibold">
              Guardian Asset Management
            </p>
            <p className="is-size-7 has-text-weight-light ls-1">
              {availableText}
              <span className="has-text-weight-bold ml-1">
                {availableSource}
              </span>
            </p>
          </div>
        </div>
      )}
      <div className="listing-card-jd px-4 h-60 has-text-left">
        <p className="is-size-5 has-text-weight-light is-full-height is-family-secondary">
          {description
            ? description
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean met ussem, sagitti vitae consequat vitae, efficitur a augue. Suspendisse ne maximus dui Praesent a turpis lacinia, maximus quam et, rutrum felis..."}
          {isBtnHide && (
            <button className="has-background-white has-text-primary has-text-weight-bold is-uppercase pl-1 is-size-7 has-border-none">
              Show More
            </button>
          )}
        </p>
      </div>
      <footer className="is-flex is-justify-content-space-between is-align-items-center mt-4 h-40">
        <div className="is-flex is-align-items-center has-text-dark ml-3 is-size-4">
          <FontAwesomeIcon icon={faClock} />
          <p
            className="ml-2 has-text-weight-medium ls-1 is-size-6"
            style={{ lineHeight: 0 }}
          >
            <Moment format="YYYY/MM/DD">{new Date()}</Moment>
          </p>
        </div>
        <div className="is-flex is-align-items-center mr-3">
          {!showForm && (
            <button
              className={`is-uppercase has-text-${btnColor} has-background-${btnBackground} is-size-7 has-text-weight-semibold ${
                statusText === "SELECT TO POST" ? "ls-2" : "ls-1"
              } has-border-none`}
              onClick={onClick}
            >
              {statusText}
            </button>
          )}
          {startTraining ? (
            <button
              className="button is-primary is-size-7 has-text-weight-semibold is-uppercase ml-3 ls-1"
              style={{ lineHeight: "14.4px" }}
            >
              Start <br /> Training
            </button>
          ) : (
            <button
              className={`button ${
                training ? "is-success" : "is-primary"
              } is-size-7 has-text-weight-semibold is-uppercase ml-3 ls-1`}
              // onClick={() => handleBtnClick([infoID])}
              onClick={() => {}}
            >
              {btnText}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
export default Listing;

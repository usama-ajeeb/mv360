import React from "react";
import { OptionCard, Titlebar } from "../../app/components";
const options = [
  {
    title: "CREATE TRAINING",
    subTitle: "Feet On The Street",
    route: "/createTraining",
  },
  {
    title: "POST POSITIONS",
    subTitle: "Feet On The Street",
    route: "/postAd",
  },
  {
    title: "CREATE TRAINING",
    subTitle: "Staff",
    route: "/",
  },
];
const SelectOptions = () => {
  return (
    <div className="is-full-height has-background-light">
      <Titlebar noItems={true} />
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <div className="is-flex w-900 is-justify-content-space-between mt-6">
          {options.map((item) => {
            return <OptionCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectOptions;

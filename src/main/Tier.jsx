import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TierCard } from "../app/components";

import {
  groupsUpload,
  getSubCategories,
  getCompaniesDetail,
} from "../app/redux/actions";

import { getGroups } from "../app/redux/selector";

const card = [
  { label: "Paid Tier", route: "/dashboard", val: true },
  { label: "Non Paid Tier", route: "/dashboard", val: false },
  { label: "Creation Screens", route: "/option", val: false },
];
const Tier = ({ handleTabChange }) => {
  const Groups = useSelector(getGroups);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(groupsUpload());
    dispatch(getCompaniesDetail());
  }, []);

  React.useEffect(() => {
    if (Groups) {
      let temp = Groups.filter((item) => item.categoryName === "Market Place");
      dispatch(getSubCategories(temp[0]));
    }
  }, [Groups]);

  return (
    <div
      className={
        "has-background-light is-flex is-flex-direction-column is-align-items-center"
      }
    >
      {card.map((item, index) => {
        return (
          <div
            className="my-6"
            key={index}
            onClick={() => handleTabChange(item.val, "tier")}
          >
            <TierCard label={item.label} route={item.route} />
          </div>
        );
      })}
    </div>
  );
};

export default Tier;

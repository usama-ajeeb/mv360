import React from "react";
import {
  PageWithCards,
  NotFound,
  Titlebar,
  ListingWithSearch,
} from "../../app/components";
import { getSubGroups } from "../../app/redux/selector";
import { useSelector, useDispatch } from "react-redux";
import {
  cardImageOne,
  cardImageTwo,
  cardImageThree,
  cardImageFour,
  cardImageFive,
} from "../../assets/images";
import { trainingDataPlace } from "../../marketPlaceData";
const cardImgArr = [
  {
    img: cardImageOne,
    label: "All",
  },
  {
    img: cardImageTwo,
    label: "Property Inspection",
    border: true,
  },
  {
    img: cardImageThree,
    label: "Property Preservation",
  },
  {
    img: cardImageFour,
    label: "Property Maintenance",
  },
  {
    img: cardImageFive,
    label: "Repair & Rehab",
  },
];

const TrainingCenter = () => {
  const subGroups = useSelector(getSubGroups);
  return (
    <div className="has-background-light is-align-items-center is-flex-direction-column">
      <Titlebar />
      <div className="has-background-white">
        <PageWithCards
          title="The Training Center"
          cardImgArr={cardImgArr}
          onClick={(e) => console.log(e)}
        />
      </div>

      <div>
        <ListingWithSearch data={trainingDataPlace} training />
      </div>
    </div>
  );
};
export default TrainingCenter;

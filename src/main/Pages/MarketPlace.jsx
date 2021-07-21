import React, { useState } from "react";
import {
  Titlebar,
  MainCover,
  CardWithImage,
  ListingWithSearch,
} from "../../app/components";
import {
  cardImageOne,
  cardImageTwo,
  cardImageThree,
  cardImageFour,
  cardImageFive,
} from "../../assets/images";
import { useSelector, useDispatch } from "react-redux";
import { getSubGroups } from "../../app/redux/selector";
import { marketPlaceData } from "../../marketPlaceData";

const cardImgArr = [
  { id: 1, img: cardImageFive, label: "Tips for Getting Work" },
  { id: 2, img: cardImageTwo, label: "Property Inspection" },
  { id: 3, img: cardImageThree, label: "Property Preservation" },
  { id: 4, img: cardImageFour, label: "Property Maintenance" },
  { id: 5, img: cardImageFive, label: "Repair & Rehab" },
];

const MarketPlace = ({ paidTier }) => {
  const SubGroups = useSelector(getSubGroups);

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <Titlebar />
      <MainCover paidTier={paidTier} />
      <div className="is-flex is-align-items-center is-justify-content-center mt-3 mb-5 card-div">
        {SubGroups &&
          SubGroups.map((c, i) => (
            <div key={i} className="mr-1">
              <CardWithImage
                img={cardImgArr[i].img}
                label={c.referenceName}
                onClick={() => setSelected(c.id)}
                border={selected === c.id}
              />
            </div>
          ))}
      </div>
      <div>
        <ListingWithSearch data={marketPlaceData} />
      </div>
    </div>
  );
};

export default MarketPlace;

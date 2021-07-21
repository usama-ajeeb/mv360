import React, { useState } from "react";
import {
  PageWithCards,
  NotFound,
  Titlebar,
  ListingWithButton,
} from "../../app/components";
import {
  cardImageOne,
  cardImageTwo,
  cardImageThree,
  cardImageFour,
  cardImageFive,
} from "../../assets/images";
import EditorDropZone from "../../app/components/TextEditor/EditorDropZone";
import { useHistory } from "react-router-dom";

const cardImgArr = [
  {
    img: cardImageOne,
    label: "All",
    border: true,
  },
  {
    img: cardImageTwo,
    label: "Property Inspection",
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

const TrainingLibrary = ({ isUser, onAction }) => {
  const history = useHistory();
  const [editPost, setEditPost] = useState([]);
  return (
    <div className="is-full-height is-full-width">
      <Titlebar noItems={true} onAction={(route) => history.push(route)} />
      {!editPost.length ? (
        <div>
          <PageWithCards
            cardImgArr={cardImgArr}
            title="The Training Library"
            isUser={isUser}
            onAction={onAction}
            noBtn={true}
            training
            onClick={(e) => console.log(e)}
          />
          {/* <NotFound /> */}
          <ListingWithButton isUser={isUser} handleEditPost={setEditPost} />
        </div>
      ) : (
        <div className="has-background-light">
          <PageWithCards
            cardImgArr={cardImgArr}
            title={"EDIT TRAINING"}
            isUser={isUser}
            onAction={onAction}
            subTitle={"Feet On The Street"}
            includeSubTitle={true}
            post
          />
          <EditorDropZone />
        </div>
      )}
    </div>
  );
};
export default TrainingLibrary;

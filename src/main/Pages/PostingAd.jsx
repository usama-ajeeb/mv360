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
import { useHistory } from "react-router-dom";
import EditorDropZone from "../../app/components/TextEditor/EditorDropZone";

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

const PostingCenter = ({ isUser, onAction }) => {
  const history = useHistory();
  const [editPost, setEditPost] = useState([]);
  return (
    <div className="is-full-height is-full-width">
      <Titlebar noItems={true} />
      {!editPost.length ? (
        <div>
          <PageWithCards
            cardImgArr={cardImgArr}
            title={
              isUser ? "Placing Ad In The Market Place" : "The Training Center"
            }
            noBtn={true}
            isUser={isUser}
            onAction={onAction}
            training
          />
          {/* <NotFound /> */}
          <ListingWithButton
            isUser={isUser}
            handleEditPost={setEditPost}
            onClick={() => history.push("/singlelisting")}
          />
        </div>
      ) : (
        <div className="has-background-light">
          <PageWithCards
            cardImgArr={cardImgArr}
            title={"EDIT JOB POST"}
            isUser={isUser}
            onAction={onAction}
            post
          />
          <EditorDropZone />
          {/* <ListingWithButton isUser={isUser} /> */}
        </div>
      )}
    </div>
  );
};
export default PostingCenter;

import React, { useState } from "react";
import ListingCard from "./ListingCard";
import { ButtonGroup } from "../common/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { trainingCardData } from "../../trainingData";

const TrainingWithListing = ({ isUser, handleEditPost, onClick }) => {
  const [items, setItems] = useState(trainingCardData.slice(0, 4));
  const [hasMore, setHasMore] = useState(true);
  const handleShowAlert = () => {
    alert("Applied");
  };
  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(
        items.concat(
          trainingCardData.filter((t) => items.indexOf(t) < 0).slice(0, 2)
        )
      );
    }, 1500);
    items.length === trainingCardData.length && setHasMore(false);
  };
  return (
    <div className="has-background-light">
      <div className="is-flex is-align-items-center is-justify-content-center pt-5">
        <div style={{ marginRight: "15rem", opacity: isUser ? 0 : 1 }}>
          <ButtonGroup />
        </div>
        <div style={{ marginLeft: "15rem" }}>
          <span className="is-size-6 is-family-secondary has-text-weight-semibold ls-1">
            Showing 1 - 4 of 10 total results
          </span>
        </div>
      </div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have seen it all</b>
          </p>
        }
        className="has-text-centered is-size-3"
      >
        <div
          className="is-flex is-align-items-center is-flex-wrap-wrap mt-5 is-justify-content-center"
          style={{ marginRight: "5rem", marginLeft: "5rem" }}
        >
          {items.map((t, i) => {
            return (
              <div key={i} className="h-270 mb-5 mx-5">
                <ListingCard
                  infoName={t.infoName}
                  infoID={t.infoID}
                  title="Property Inspector"
                  tags={true}
                  btnBackground="dark"
                  btnColor="white"
                  btnText={t.btnText}
                  statusText={`SELECT TO POST`}
                  join={t.join}
                  onClick={onClick}
                  availableText={t.availableText}
                  availableSource={t.availableSource}
                  handleBtnClick={
                    t.btnText === "Edit" ? handleEditPost : handleShowAlert
                  }
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default TrainingWithListing;

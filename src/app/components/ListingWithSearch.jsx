import React, { useState } from "react";
import ListingCard from "./ListingCard";
import SearchBar from "./SearchBar";
import NotFound from "./NotFound";
import { marketPlaceData } from "../../marketPlaceData";
import InfiniteScroll from "react-infinite-scroll-component";

const ListingWithSearch = ({ data, training }) => {
  const [items, setItems] = useState(data.slice(0, 2));
  const [fltrList, setFltrList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleSearch = (e) => {
    e.target.value && e.target.value !== ""
      ? setIsSearching(true)
      : setIsSearching(false);
    const filteredList = data.filter((l) =>
      l.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFltrList(filteredList);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(
        items.concat(data.filter((t) => items.indexOf(t) < 0).slice(0, 2))
      );
    }, 1500);
    items.length === data.length && setHasMore(false);
  };

  return (
    <div className="has-background-light">
      <div
        className="is-flex is-align-items-center is-justify-content-center pt-5 pb-3"
        style={{
          marginLeft: "calc(50% - 37rem)",
          marginRight: "calc(50% - 37rem)",
        }}
      >
        <SearchBar onChange={(e) => handleSearch(e)} />
      </div>
      {!isSearching ? (
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
            {items.map((f, i) => (
              <div key={i} className="h-270 mb-5 mx-5">
                <ListingCard
                  infoName={f.infoName}
                  infoID={f.infoID}
                  tags={f.tags}
                  title={f.title}
                  btnText={f.btnText}
                  btnBackground="white"
                  statusText={f.statusText}
                  join={f.join}
                  availableText={f.availableText}
                  availableSource={f.availableSource}
                  handleBtnClick={() => console.log("hello")}
                  training={training}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      ) : fltrList.length > 0 ? (
        <div
          className="is-flex is-align-items-center is-flex-wrap-wrap mt-5 is-justify-content-center"
          style={{ marginRight: "5rem", marginLeft: "5rem" }}
        >
          {fltrList.map((f, i) => (
            <div key={i} className="h-270 mb-5 mx-5">
              <ListingCard
                infoName={f.infoName}
                infoID={f.infoID}
                tags={f.tags}
                title={f.title}
                btnBackground="white"
                btnText={f.btnText}
                statusText={f.statusText}
                join={f.join}
                availableText={f.availableText}
                availableSource={f.availableSource}
                handleBtnClick={() => console.log("hello")}
                training={training}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="is-flex is-align-items-center is-flex-wrap-wrap mt-5 is-justify-content-center"
          style={{ marginRight: "5rem", marginLeft: "5rem" }}
        >
          <NotFound />
        </div>
      )}
    </div>
  );
};
export default ListingWithSearch;

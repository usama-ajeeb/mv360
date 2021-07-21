import React from "react";
import { Titlebar, CardWithImage } from "./index";
import { Link, useHistory } from "react-router-dom";
import { getSubGroups } from "../../app/redux/selector";
import { useSelector, useDispatch } from "react-redux";
const PageWithCards = ({
  selected,
  title,
  subTitle,
  isUser,
  post,
  training,
  cardImgArr,
  includeSubTitle,
  noBtn,
  onClick,
}) => {
  const path = window.location.pathname;

  const subGroups = useSelector(getSubGroups);

  return (
    <div>
      <div
        className={`is-full-width page-with-card ${post ? "h-390" : "h-463"} `}
      >
        <header className={`has-text-centered ${post ? "mb-6" : "mb-5"}`}>
          <span className="has-text-dark has-text-weight-normal ls-2 m-h1">
            {title}
          </span>
          {includeSubTitle && <br />}
          {includeSubTitle && (
            <span className="has-text-dark is-size-1">"{subTitle}"</span>
          )}
        </header>
        <main className="is-flex is-justify-content-center">
          {subGroups.map((c, i) => (
            <div className="mr-1" key={i}>
              <CardWithImage
                img={cardImgArr[i].img}
                label={c.referenceName}
                border={selected && selected.id === c.id}
                noBtn={noBtn}
                onClick={() => onClick(c)}
              />
            </div>
          ))}
        </main>
        {!post && (
          <footer className="is-flex is-justify-content-center">
            {training ? (
              path === "/traininglibrary" ? (
                <Link to={"/createtraining"}>
                  <button className="button is-primary is-size-2 has-text-weight-medium w-318 h-76">
                    CREATE NEW TRAINING
                  </button>
                </Link>
              ) : path === "/postAd" ? (
                <Link to={"/ads"}>
                  <button className="button is-primary is-size-2 has-text-weight-medium w-318 h-76">
                    Post A New Ad
                  </button>
                </Link>
              ) : null
            ) : (
              //Else Condition
              <Link to={"/marketplace"}>
                <button className="button is-primary is-size-2 has-text-weight-medium w-318 h-76">
                  Looking for more work?
                </button>
              </Link>
            )}
          </footer>
        )}
      </div>
    </div>
  );
};
export default PageWithCards;

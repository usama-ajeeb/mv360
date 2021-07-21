import React from "react";
const CardWithImage = ({ border, img, label, noBtn, onClick }) => {
  return (
    <div
      className="has-background-white is-flex is-flex-direction-column is-justify-content-center is-align-items-center w-200 h-200 card-with-img is-pointer"
      style={{ border: border && "2px solid #0032fc" }}
      onClick={onClick}
    >
      <img src={img} alt="card-image" />
      <p className="has-text-centered has-text-dark mt-2 has-text-weight-light">
        {label}
      </p>
      {!noBtn && (
        <button className="button is-white has-text-primary is-size-7 p-0 has-text-weight-medium h-14">
          View Details
        </button>
      )}
    </div>
  );
};
export default CardWithImage;

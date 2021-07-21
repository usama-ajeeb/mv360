import React from "react";
import Listing from "./ListingCard";

const PreviewCard = () => {
  return (
    <div className="is-size-3 preview-card is-full-width">
      <h4 className="has-text-dark ls-2">Preview</h4>
      <div className="preview-card-preview h-253 is-flex is-align-items-center is-justify-content-center has-background-white mt-5">
        <p className="has-text-light ls-1">Nothing to Preview123</p>
        {/* <Listing preview={true} /> */}
      </div>
    </div>
  );
};
export default PreviewCard;

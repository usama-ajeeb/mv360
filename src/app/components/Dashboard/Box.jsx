import React from "react";
import { left, right } from "../../../assets/svg/index";

const VendorViewPopup = ({
  mainContent,
  headerContent,
  footer,
  height,
  spaceBetween,
  mainHeight,
  overflow,
}) => {
  return (
    <div className="dashboard-box mb-4" style={{ height: height }}>
      <header className="is-flex is-align-items-center">{headerContent}</header>
      <main
        className={`is-flex is-justify-content-${
          spaceBetween ? "space-between" : "space-around"
        } is-flex-wrap-wrap`}
        style={{ height: mainHeight, overflow: overflow && "auto" }}
      >
        {mainContent}
      </main>
      {footer && (
        <footer className="mt-5">
          <div className="is-flex is-justify-content-flex-end mr-3 vender-view-icon">
            <img src={left} alt="left" />
            <img src={right} alt="right" />
          </div>
        </footer>
      )}
    </div>
  );
};
export default VendorViewPopup;

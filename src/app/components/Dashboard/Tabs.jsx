import React from "react";

const Tabs = () => {
  return (
    <div className="tabs is-full-width is-right is-boxed px-5">
      <ul>
        <li className="is-active">
          <a>
            <span className="is-family-secondary">My Profile</span>
          </a>
        </li>
        <li>
          <a>
            <span className="is-family-secondary">My Libraries</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Tabs;

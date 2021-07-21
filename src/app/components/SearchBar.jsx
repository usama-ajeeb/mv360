import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/pro-light-svg-icons";

const SearchBar = ({ onChange }) => {
  return (
    <div className="is-flex search-bar is-full-width">
      <div className="field search-bar-container is-full-width">
        <p className="control has-icons-left ">
          <input
            className="input pt-2"
            type="text"
            onChange={onChange}
            placeholder="Search for jobs or trainings"
          />
          <span className="icon is-small is-left pt-2">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </span>
        </p>
      </div>
      <button className="button is-white has-text-dark is-size-6 btn-box-shadow ml-5 has-text-weight-medium ls-1">
        <span className="mr-2 has-text-light">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
        </span>
        Your Coverage Area
      </button>
    </div>
  );
};
export default SearchBar;

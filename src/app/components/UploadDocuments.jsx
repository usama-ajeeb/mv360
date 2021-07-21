import React from "react";
import { Upload } from "../../assets/images/index";
const UploadDocuments = ({ isUploaded }) => {
  let colorTxt = isUploaded ? "has-text-dark" : "has-text-primary";
  return (
    <div className="box h-150 w-516 is-flex is-align-items-center is-justify-content-center mt-5 is-absolute ">
      <button
        className="h-125 w-500 has-dashed-border is-flex is-align-items-center is-justify-content-center is-flex-direction-column has-background-white is-pointer"
        onClick={() => alert("Hello")}
      >
        <img src={Upload} />
        <span className={`is-size-4 ${colorTxt} mt-3 is-family-secondary`}>
          Upload all the releated Documents
        </span>
        <span className="has-text-dark mt-1 is-family-secondary">
          Drag & Drop or click to select
        </span>
      </button>

      {isUploaded ? (
        <div
          style={{ position: "absolute", top: 22, left: 40 }}
          className="is-flex is-align-items-center"
        >
          <span class="icon has-text-dark">
            <i class="far fa-file-pdf fa-3x"></i>
          </span>
          <div className="ml-3 ">
            <span>my-file.pdf</span>

            <div className="is-flex">
              <span class="button has-text-primary has-border-none is-size-7 has-padding-left-none">
                Edit Title
              </span>
              <span class="button has-text-danger has-border-none is-size-7 has-padding-left-none">
                Delete File
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UploadDocuments;

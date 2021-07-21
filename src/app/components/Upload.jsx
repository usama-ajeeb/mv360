import React from "react";
import Dropzone from "./Dropzone";

const Upload = ({
  value,
  icon,
  title,
  aftrUploadIcon,
  acceptedFormats,
  onDocsUpload,
  handleEdit,
}) => {
  return (
    <div>
      <label className="has-text-dark is-size-5 ls-1 is-family-secondary">
        Upload Documents
      </label>
      <div className="has-background-white upload is-flex is-justify-content-center is-align-items-center mt-2 h-150 w-516 is-pointer">
        <Dropzone
          values={value}
          onDrop={onDocsUpload}
          icon={icon}
          title={title}
          aftrUploadIcon={aftrUploadIcon}
          acceptedFormats={acceptedFormats}
          isMultiUpload
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};
export default Upload;

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropzone = ({
  values,
  onDrop,
  acceptedFormats,
  isMultiUpload,
  icon,
  title,
  aftrUploadIcon,
  handleEdit,
}) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept: acceptedFormats,
    multiple: isMultiUpload,
  });
  const [fileName, setFileName] = useState([]);

  React.useEffect(() => {
    console.log(values, acceptedFiles);
    setFileName([...values, ...acceptedFiles]);
  }, [acceptedFiles]);

  const handleDelete = (f) => {
    console.log("HandleDelete", f);
    let temp = fileName;
    temp.splice(f, 1);
    setFileName(temp);
    handleEdit({ uploadDocs: temp });
  };

  const handleEditName = (i) => {
    handleEdit({ uploadDocs: acceptedFiles });

    const fName = fileName[i].name;
    const newFileName = prompt("Please enter file name", `${fName}`);
    console.log("Accepted Files", acceptedFiles, i);
    if (newFileName === "" || newFileName === null) {
      return fileName ? fileName : fName;
    } else {
      let temp = fileName.map((item) => {
        if (item.name === fName) {
          return { name: newFileName };
        }
        return item;
      });

      setFileName(temp);
      console.log("Checkin ", temp, i);
    }
  };

  const showFile = (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        overflow: "scroll",
        overflowX: "hidden",
        zIndex: 100,
      }}
      className="h-120 is-flex is-flex-wrap-wrap"
    >
      {fileName &&
        fileName.map((f, i) => {
          return (
            <div>
              <div className="has-text-dark is-flex pl-5 pt-3" key={i}>
                <FontAwesomeIcon icon={aftrUploadIcon} size="3x" />
                <div className="is-family-secondary mt-1 ml-2">
                  <p className="is-size-5 ls-1">{f.name}</p>
                  <button
                    className="button p-0 h-15 mr-2 is-family-secondary has-border-none has-background-white has-text-primary has-text-weight-semibold is-size-7 ls-1"
                    onClick={() => handleEditName(i)}
                  >
                    Edit Title
                  </button>
                  <button
                    className="button p-0 h-15 is-family-secondary has-border-none has-background-white has-text-danger has-text-weight-semibold is-size-7 ls-1"
                    onClick={() => handleDelete(f.path)}
                  >
                    Delete File
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );

  return (
    <div className="container is-flex-grow-0">
      <div
        {...getRootProps({
          className:
            "is-flex is-flex-direction-column is-align-items-center has-background-white dropzone h-125 w-496",
        })}
      >
        {fileName && fileName.length > 0 && showFile}
        <input {...getInputProps()} />
        <div
          className="dropzone-content is-flex is-justify-content-center is-align-items-center is-flex-direction-column is-full-height"
          style={{ opacity: fileName.length > 0 && 0.15 }}
        >
          <FontAwesomeIcon icon={icon} size="3x" color="#0032fc" />
          <div className="mt-1 has-text-centered">
            <p
              className="has-text-primary is-family-secondary ls-1"
              style={{ lineHeight: 1.438 }}
            >
              {title}
            </p>
            <p
              className="has-text-dark is-family-secondary ls-1 is-size-5"
              style={{ lineHeight: 1.3 }}
            >
              Drag & Drop or click to select
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropzone;

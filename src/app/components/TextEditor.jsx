import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { B, I, U } from "../../assets/svg/index";

const TextEditor = ({ post, editorState, onEditorStateChange, setError }) => {
  return (
    <Editor
      toolbar={{
        options: ["blockType", "inline", "textAlign", "list", "link"],
        inline: {
          inDropdown: false,
          className: "txt-area-opts-fontWeight",
          component: undefined,
          dropdownClassName: undefined,
          options: ["bold", "italic", "underline"],
          bold: {
            icon: B,
            className: undefined,
          },
          italic: {
            icon: I,
            className: undefined,
          },
          underline: {
            icon: U,
            className: "txt-underline",
          },
        },
        list: {
          //   className: undefined,
          //   component: undefined,
          //   dropdownClassName: undefined,
          options: ["unordered", "ordered"],
          //   unordered: { icon: unordered, className: undefined },
          //   ordered: { icon: ordered, className: undefined },
        },
        blockType: {
          inDropdown: true,
          options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"],
          className: "txt-area-opts-font",
        },
        link: {
          inDropdown: false,
          className: "txt-area-opts-link",
          component: undefined,
          popupClassName: undefined,
          dropdownClassName: undefined,
          showOpenOptionOnHover: true,
          defaultTargetOption: "_self",
          options: ["link"],
          //   link: { icon: Link, className: undefined },
          linkCallback: undefined,
        },
        textAlign: {
          className: "txt-area-opts-textAlign",
          options: ["left", "center", "right"],
          left: { className: "txt-align-left" },
          center: { className: "txt-align-center" },
          right: { className: "txt-align-right" },
        },
      }}
      editorState={editorState}
      toolbarClassName="txt-area-opts-toolbar"
      wrapperClassName={`txt-area-opts-wrapper ${post ? "h-120" : "h-168"} `}
      editorClassName="txt-area-opts-editor hide_scrollbar"
      onEditorStateChange={onEditorStateChange}
      onFocus={() => setError(true)}
    />
  );
};
export default TextEditor;

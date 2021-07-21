import React, { useEffect } from "react";
import { useState } from "react";
import TextEditor from "./TextEditor";
import { EditorState, ContentState, convertFromHTML } from "draft-js";

const TextAreaWithOptions = ({
  value,
  title,
  property,
  ind,
  post,
  question,
  error,
  onChange,
}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(value))
  );
  const [errorProblem, setError] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const newContent = editorState.getCurrentContent().getPlainText();
    setEditorContent(newContent);
    if (!property) {
      onChange(newContent, ind);
    } else {
      onChange({ [property]: newContent });
    }
  };
  return (
    <div className="txt-area-opts ">
      <header className="has-text-dark">
        <span className="is-size-5 is-family-secondary letter-spacing-1">
          {title}
        </span>
      </header>
      <main
        className={`is-full-width has-background-white mt-2  ${
          post ? "h-174" : question ? "h-120" : "h-218"
        }`}
      >
        <TextEditor
          post={post}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          setError={setError}
        />
      </main>
      {value === "" && error ? (
        <div className="has-text-danger mt-1">This is required!</div>
      ) : null}
    </div>
  );
};
export default TextAreaWithOptions;

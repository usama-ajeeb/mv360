import React from "react";

const ShowQuestions = ({ items, onAction, handleDeleteQues }) => {
  return (
    <div>
      {items.questions &&
        items.questions.map((item, index) => {
          return (
            <div className="my-2 mt-5 ml-4 is-flex is-flex-direction-column has-background-white has-border-radius-5 w-550">
              <div className="is-flex">
                <span
                  className="ml-2 is-flex is-align-items-center w-370"
                  style={{ overflow: "clip" }}
                >
                  Q:
                  <span className="has-text-weight-semibold ml-1">
                    {item.question}
                  </span>
                </span>
                <button
                  class="button has-border-none ml-5 has-text-primary"
                  onClick={() =>
                    onAction({ data: index, type: "edit" }, "question")
                  }
                >
                  Edit
                </button>
                <button
                  class="button has-border-none ml-2 has-text-danger"
                  onClick={() => handleDeleteQues(item)}
                >
                  Remove
                </button>
              </div>
              {item.answers.map((val, index) => {
                return (
                  <span className="ml-5">
                    {String.fromCharCode(97 + index)}
                    {")"}
                    <span className="ml-2" style={{ textOverflow: "ellipsis" }}>
                      {val.answer}
                    </span>
                  </span>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default ShowQuestions;

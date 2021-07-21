import React, { useState } from "react";
import TextAreaWithOptions from "./TextAreaWithOptions";

const QuestionModal = ({ items, selected, handleValues, onClick }) => {
  const [showAns, setShowAns] = useState(
    selected !== -1
      ? items[selected].answers
      : [
          { answer: "", correctAns: true },
          { answer: "", correctAns: false },
        ]
  );
  const [ques, setQues] = useState({
    question: selected !== -1 ? items[selected].question : "",
  });

  const handleClicked = () => {
    let temp = [...showAns, { answer: "", correctAns: false }];
    setShowAns(temp);
  };

  const handleUpdates = (val, type, index) => {
    switch (type) {
      case "checkbox":
        let temp = showAns.map((item, i) => {
          return {
            ...item,
            correctAns: i === index,
          };
        });
        setShowAns(temp);
        break;
      default:
    }
  };

  const handleQuestion = (item) => {
    setQues({ ...item });
  };

  const handleQuesChange = (val, n) => {
    const temp = [...showAns];
    temp[n].answer = val;
    setShowAns(temp);
  };

  const handleSave = () => {
    let temp = [];
    if (selected === -1) {
      if (items) {
        temp = [
          ...items,
          {
            question: ques.question,
            answers: showAns,
          },
        ];
      } else {
        temp = [
          {
            question: ques.question,
            answers: showAns,
          },
        ];
      }
    } else {
      temp = [...items];
      temp[selected].question = ques.question;
      temp[selected].answers = showAns;
    }
    handleValues({ questions: temp });
    onClick(false);
  };

  const handleDelete = (pos) => {
    let temp = showAns.filter((item, index) => pos !== index);
    setShowAns(temp);
  };
  return (
    <div className="modal is-active">
      <div className="modal-background "></div>
      <div className="modal-card w-1000 h-700 has-background-grey ">
        <div className="has-background-white">
          <header className="modal-card-head has-background-primary px-4 mx-2 mt-2">
            <p className="modal-card-title">Question</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => onClick(false)}
            ></button>
          </header>
        </div>
        <section className="modal-card-body has-background-white">
          <div className="mt-2">
            <span className="has-text-black ml-2 has-text-weight-semibold">
              Question
            </span>
            <div className="h-200">
              <TextAreaWithOptions
                value={ques.question}
                question
                property={"question"}
                onChange={handleQuestion}
              />
            </div>
          </div>

          {showAns.map((item, index) => {
            return (
              <div className="" style={{ marginTop: "-3rem" }}>
                <div
                  className={`is-flex ${
                    index > 0 ? "is-justify-content-space-between" : ""
                  }`}
                  style={{ marginTop: "-1rem" }}
                >
                  <span className="has-text-black ml-2 has-text-weight-semibold">
                    Answer
                  </span>
                  {index > 1 && (
                    <button
                      className="button"
                      onClick={() => handleDelete(index)}
                      style={{ zIndex: 10 }}
                    >
                      <span className="icon is-small has-text-danger">
                        <i className="fas fa-trash is-pointer"></i>
                      </span>
                    </button>
                  )}
                </div>
                <input
                  checked={item.correctAns}
                  type="radio"
                  name="radioBtn"
                  className="ml-2"
                  onClick={() => handleUpdates("", "checkbox", index)}
                />
                <span className="has-text-black ml-2">Correct Answer</span>
                <div className="h-200">
                  <TextAreaWithOptions
                    value={item.answer}
                    question
                    onChange={handleQuesChange}
                    ind={index}
                  />
                </div>
              </div>
            );
          })}
        </section>
        <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
          <button
            className="button is-success has-background-primary"
            onClick={handleClicked}
            disabled={showAns.length === 5}
          >
            Add Answer
          </button>
          <button
            className="button"
            id="cancel"
            onClick={() => {
              handleSave();
            }}
            className="button is-success has-background-primary"
          >
            Save
          </button>
        </footer>
      </div>
    </div>
  );
};

export default QuestionModal;

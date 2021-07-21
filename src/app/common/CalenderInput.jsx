import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
import Calendar from "react-calendar";

const CalenderInput = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <span className="has-text-dark is-family-secondary">{"Retake"}</span>
      <div className="box is-flex is-align-items-center is-justify-content-space-between h-40 w-250 mt-2">
        <input
          className="input has-border-none is-family-secondary"
          type="text"
          placeholder="mm/dd/yyyy"
          style={{ marginLeft: -15 }}
        />
        <button
          className="button ml-2 has-border-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Popover
            isOpen={isOpen}
            positions={["bottom", "right"]} // preferred positions by priority
            content={<Calendar />}
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              <span className="icon has-text-dark">
                <i className="far fa-calendar"></i>
              </span>
            </div>
          </Popover>
        </button>
      </div>
    </div>
  );
};

export default CalenderInput;

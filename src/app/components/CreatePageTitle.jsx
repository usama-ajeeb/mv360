import React from "react";

function CreatePageTitle({ title }) {
  return (
    <div>
      <header className="is-size-3 has-text-dark">
        <h3 className="ls-2">{title}</h3>
      </header>
    </div>
  );
}
export default CreatePageTitle;

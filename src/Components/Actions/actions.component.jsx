import React from "react";

const Actions = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I choose?
      </button>
    </div>
  );
};

export default Actions;

import React from "react";
import "./actions.styles.scss";

const Actions = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
      What should I choose?
    </button>
  </div>
);

export default Actions;

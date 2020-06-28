import React from "react";
import Option from "../Option/option.component.jsx";
import "./options.styles.scss";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>

      <button
        disabled={!props.hasOptions}
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget-message">Please Add an option to get started</p>
    )}{" "}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;

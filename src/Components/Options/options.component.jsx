import React from "react";
import Option from "../Option/option.component.jsx";

const Options = (props) => {
  return (
    <div>
      {" "}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
};

export default Options;

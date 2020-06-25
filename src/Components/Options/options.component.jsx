import React from "react";
import Option from "../Option/option.component.jsx";

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}

        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    );
  }
}

export default Options;

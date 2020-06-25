import React from "react";

class Actions extends React.Component {
  handlePick() {
    alert("Handle Pick");
  }
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I choose?
        </button>
      </div>
    );
  }
}

export default Actions;

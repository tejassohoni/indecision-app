import React from "react";
import "./add-options.styles.scss";

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form onSubmit={this.handleAddOption} className="add-option-form">
          <input className="add-option-input" type="text" name="option"></input>
          <button className="add-option-button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOptions;

import React from "react";
import Header from "./Components/Header/header.component.jsx";
import Actions from "./Components/Actions/actions.component.jsx";
import Options from "./Components/Options/options.component.jsx";
import AddOptions from "./Components/AddOptions/add-options.component.jsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }

  handleAddOptions(option) {
    if (!option) {
      return "Please enter a value to add";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Actions
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions handleAddOptions={this.handleAddOptions} />
      </div>
    );
  }
}

App.defaultProps = {
  options: [],
};

export default App;

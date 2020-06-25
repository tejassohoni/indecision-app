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
    this.state = {
      options: [1, 2, 3],
      title: "Indecision App",
      subtitle: "Let the computer decide",
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] };
    });
  }
  handleAddOption() {
    this.setState((prevState) => {
      return { options: prevState.options.push() };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Actions
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOptions options={this.state.options} />
      </div>
    );
  }
}

export default App;

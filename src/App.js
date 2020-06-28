import React from "react";
import ModalWin from "./Components/Modal/modal.component.jsx";
import Header from "./Components/Header/header.component.jsx";
import Actions from "./Components/Actions/actions.component.jsx";
import Options from "./Components/Options/options.component.jsx";
import AddOptions from "./Components/AddOptions/add-options.component.jsx";
import "normalize.css/normalize.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.state = {
      options: [],
      selectedOption: props.selectedOption,
      abc: 1,
    };
  }
  componentDidMount() {
    try {
      const jsonGet = localStorage.getItem("options");
      const options = JSON.parse(jsonGet);
      if (options) {
        this.setState(() => ({
          options,
        }));
      }
    } catch (e) {
      //Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsonSet = JSON.stringify(this.state.options);
      localStorage.setItem("options", jsonSet);
    }
  }

  handleModal = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

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
        <div className="container">
          <Actions
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              hasOptions={this.state.options.length > 0}
            />
            <AddOptions handleAddOptions={this.handleAddOptions} />
          </div>

          <ModalWin
            handleModal={this.handleModal}
            selectedOption={this.state.selectedOption}
          />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  selectedOption: undefined,
};
export default App;

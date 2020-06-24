import React from "react";
import Header from "./Components/Header/header.component.jsx";
import Actions from "./Components/Actions/actions.component.jsx";
import Options from "./Components/Options/options.component.jsx";
import AddOptions from "./Components/AddOptions/add-options.component.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Actions />
			<Options />
			<AddOptions />
		</div>
	);
}

export default App;

import React from "react";

class Header extends React.Component {
	render() {
		return (
			<div id="header">
				<h1>{this.props.title}</h1>
				<h1>{this.props.subtitle}</h1>
			</div>
		);
	}
}

export default Header;

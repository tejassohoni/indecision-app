import React from "react";
import "./header.styles.scss";

const Header = (props) => (
  <div className="header">
    <h1 className="container title">{props.title}</h1>
    {props.subtitle && <h2 className="container subtitle">{props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision",
  subtitle: "Let the computer decide",
};

export default Header;

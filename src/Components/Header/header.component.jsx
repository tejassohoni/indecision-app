import React from "react";

const Header = (props) => {
  return (
    <div id="header">
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App",
  subtitle: "Let the computer decide",
};

export default Header;

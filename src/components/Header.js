import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  // props

  return (
    <header className="header">
      {/* <h1>Task Tracker</h1> */}
      {/* <h1 style = {headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color="green" text="Add" onCLick={onClick} />
      {/* <Button color='red' text='Danger'/>
        <Button color='Aqua' text='Kiss'/> */}
      {/* <h2>{props.title}</h2> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//To avoid inline text you can do the below
//CSS in JS
// const headingStyle = {
//   color: "blue",
//   backgroundColor: "#fff",
// };

export default Header;

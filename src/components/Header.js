import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      {/* <Button color="blue" text="Hello1" />
      <Button color="red" text="Hello3" /> */}

      {/* inline styling
     <h1 style={{ color: "red", backgroundColor: "black" }}>{title}</h1> */}

      {/* CSS in JS
      <h1 style={headingStyle}>{title}</h1> */}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;

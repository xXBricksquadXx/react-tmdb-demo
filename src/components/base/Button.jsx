import PropTypes from "prop-types";
import React from "react";

const Button = ({ txt }) => {
  return (
    <button className="transition duration-500 ease-in-out bg-green-700 hover:bg-green-500 transform text-white rounded p-2 hover:-translate-y-1 hover:scale-110">
      {txt}
    </button>
  );
};

Button.propTypes = {
  txt: PropTypes.string,
};

Button.defaultProps = {
  txt: "Submit",
};

export default Button;

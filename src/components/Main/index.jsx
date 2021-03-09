import PropTypes from "prop-types";

/**
 * Children is a special prop type.
 * We use this to compose React components.
 *
 * It means that one component is just used to receive any/all React components.
 */
function Main({ children }) {
  return <main className="container mx-auto">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

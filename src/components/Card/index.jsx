import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ title, id }) => {
  return <Link to={`/${id}`}>{title}</Link>;
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;

import PropTypes from "prop-types";

const Card = ({ title, path, date, rating }) => {
  return (
    <section>
      <h2>{title}</h2>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${path}`}
          alt={`Movie poster for ${title}`}
        />
        <figcaption>
          {date} - {rating}
        </figcaption>
      </figure>
      {/* TODO: Use `<Link to={`/{id}`}/> */}
      <button>More Info!</button>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;

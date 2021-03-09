import PropTypes from "prop-types";

const Card = ({ title, imgSrc, date, rating, id }) => {
  return (
    <section>
      <h2>{title}</h2>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
          alt={`Movie poster for ${title}`}
        />
        <figcaption>
          {date} - {rating}
        </figcaption>
      </figure>
      {/* TODO: Use `<Link to={`/{id}`}/> */}
      <button>More Info! {id}</button>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;

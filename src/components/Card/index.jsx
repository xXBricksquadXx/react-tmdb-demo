import { Btn } from "components/base";
import PropTypes from "prop-types";

const Card = ({ title, imgSrc, date, rating, id }) => {
  return (
    <section className="border-2 border-black-600 p-4 rounded shadow-sm flex flex-col gap-4 text-center">
      <h2 className="font-black line-clamp-1">{title}</h2>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
          alt={`Movie poster for ${title}`}
          className="rounded"
        />
        <figcaption>
          {/* TODO: Format the date! */}
          <p>
            <span className="italic">Release Date:</span> {date}
          </p>
          <p>{rating}</p>
        </figcaption>
      </figure>
      {/* TODO: Use `<Link to={`/{id}`}/> */}
      <Btn txt="🎥 More Info" />
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

Card.defaultProps = {
  imgSrc: "",
};

export default Card;

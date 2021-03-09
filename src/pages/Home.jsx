import api from "api";
import { Card, Main } from "components";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  // Runs on every render (in response side effect)
  useEffect(
    () => {
      (async () => {
        const { results } = await api.index();
        setMovies(() => results);
      })();
    },

    // Empty dep array means on initial render
    []
  );

  return (
    <Main>
      {movies.map(
        ({
          title,
          id,
          poster_path: poster,
          vote_average: rating,
          release_date: date,
        }) => (
          <Card
            key={id}
            title={title}
            id={id}
            imgSrc={poster}
            rating={rating}
            date={date}
          />
        )
      )}
    </Main>
  );
};

export default Home;

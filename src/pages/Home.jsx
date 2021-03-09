import api from "api";
import { Card, Main, Search } from "components";
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

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <Main>
      <Search handler={handleSearch} label="Search Movie Titles" />
      <div className="grid grid-cols-5 gap-8">
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
      </div>
    </Main>
  );
};

export default Home;

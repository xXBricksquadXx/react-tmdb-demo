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

  async function handleSearch(event) {
    event.preventDefault();
    const { results } = await api.index("/search/movie", {
      query: event.target.elements[0].value,
    });
    setMovies(() => results);
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
              date={new Date(date).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
              })}
            />
          )
        )}
      </div>
    </Main>
  );
};

export default Home;

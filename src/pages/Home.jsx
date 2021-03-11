import api from "api";
import { Card, Main, Modal, Search } from "components";
import { HandlerContext } from "context";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState({});

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

  async function handleMoreInfo({ target }) {
    const movieData = await api.show(target.closest("section").dataset.id);
    setActiveMovie(() => movieData);
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
            <HandlerContext.Provider value={handleMoreInfo} key={id}>
              <Card
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
            </HandlerContext.Provider>
          )
        )}
      </div>

      <Modal title={activeMovie.title} overview={activeMovie.overview} />
    </Main>
  );
};

export default Home;

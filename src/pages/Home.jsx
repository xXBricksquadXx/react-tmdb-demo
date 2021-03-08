import api from "api";
import { Main } from "components";
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
      <p>Hello World</p>
    </Main>
  );
};

export default Home;

import api from "api";
import { Main } from "components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Film = () => {
  const [movie, setMovie] = useState({});
  const { pathname: id } = useLocation();

  useEffect(() => {
    (async () => {
      const movieData = await api.show(id);
      const movieCredits = await api.show(id, "/credits");
      setMovie(() => ({ ...movieData, ...{ credits: movieCredits.cast } }));
    })();
  }, [id]);

  return <Main>{movie.overview}</Main>;
};

export default Film;

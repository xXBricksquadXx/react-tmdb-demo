import ky from "ky";

const api = {
  index(
    endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ) {
    console.log(endpoint);
    return ky.get(endpoint).json();
  },
};

export default api;

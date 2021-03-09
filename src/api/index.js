import ky from "ky";

const api = {
  index(path = "/movie/popular", params = {}) {
    const searchParams = {
      ...{ api_key: process.env.REACT_APP_API_KEY, language: "en-US" },
      ...params,
    };

    return ky
      .get(`${process.env.REACT_APP_API_BASE}${path}`, {
        searchParams,
      })
      .json();
  },
};

export default api;

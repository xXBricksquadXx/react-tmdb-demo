import ky from "ky";

const apiKey = process.env.REACT_APP_API_KEY;
const baseParams = { api_key: apiKey, language: "en-US" };
const baseUrl = process.env.REACT_APP_API_BASE;

const api = {
  index(path = "/movie/popular", params = {}) {
    const searchParams = {
      ...baseParams,
      ...params,
    };

    return ky
      .get(`${baseUrl}${path}`, {
        searchParams,
      })
      .json();
  },

  show(id, path = "") {
    const noSlashId = id[0] === "/" ? id.slice(1) : id;

    return ky
      .get(`${baseUrl}/movie/${noSlashId}${path}`, {
        searchParams: baseParams,
      })
      .json();
  },
};

export default api;

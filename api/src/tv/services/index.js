import axios from "axios";

export default {
  getTvShow: async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}`
    );
    const data = response.data;
    return data;
  },
  find: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getTvImages: async (id, dependancies) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
};

import axios from "axios";

export default {
  find: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_KEY}&query=${query}`
    );
    return response.data;
  }
};

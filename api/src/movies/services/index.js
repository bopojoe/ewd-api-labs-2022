import axios from "axios";

export default {
  getMovie: async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  find: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },
  findUpcoming: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },
  getMovieImages: async (id, dependancies) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getMovieReviews: async (id, dependancies) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getMovieCredits: async (id, dependancies) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
    );
    const data = response.data;
    return response.data;
  },
};

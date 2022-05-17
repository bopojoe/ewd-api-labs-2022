import Genre from "../entities/Genres";

export default {
  find: ({ genresRepository }) => {
    return genresRepository.find();
  },
  getGenre: (genreId, { genresRepository }) => {
    return genresRepository.get(genreId);
  },
};

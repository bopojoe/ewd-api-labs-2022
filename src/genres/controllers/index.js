import genreService from "../services";

export default (dependencies) => {
  const listGenres = async (request, response, next) => {
    // Treatment
    const genres = await genreService.find(dependencies);
    //output
    response.status(200).json(genres);
  };

  const getGenre = async (request, response, next) => {
    //input
    const genreId = request.params.id;
    // Treatment
    const genres = await genreService.find(dependencies);
    const result = await genres.filter((genre) => 
      genre.id == parseInt(genreId)
    );
    // const output = dependencies.accountsSerializer.serialize(account);
    //output
    response.status(200).json(result);
  };

  return {
    getGenre,
    listGenres,
  };
};

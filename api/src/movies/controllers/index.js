import moviesService from "./../services";

export default (dependencies) => {
  const getMovie = async (request, response, next) => {
    //input
    const movieId = request.params.id;
    // Treatment
    const movie = await moviesService.getMovie(movieId, dependencies);
    //output
    response.status(200).json(movie);
  };
  const getMovieImages = async (request, response, next) => {
    //input
    const movieId = request.params.id;
    // Treatment
    const movieImages = await moviesService.getMovieImages(
      movieId,
      dependencies
    );
    //output
    response.status(200).json(movieImages);
  };
  const getMovieReviews = async (request, response, next) => {
    //input
    const movieId = request.params.id;
    // Treatment
    const movieImages = await moviesService.getMovieReviews(
      movieId,
      dependencies
    );
    //output
    response.status(200).json(movieImages);
  };

  const getMovieCredits = async (request, response, next) => {
    //input
    const movieId = request.params.id;
    // Treatment
    await moviesService
      .getMovieCredits(movieId, dependencies)
      .then((movieCredits) => {

        response.status(200).send(movieCredits);
      });
    //output
   // console.log(movieCredits, "credits");
    
  };
  const find = async (request, response, next) => {
    //input
    const query = request.query;
    // Treatment
    const accounts = await moviesService.find(query, dependencies);
    //output
    response.status(200).json(accounts);
  };
  const getUpcomingMovies = async (request, response, next) => {
    const query = request.query;
    // Treatment
    const movies = await moviesService.findUpcoming(dependencies);
    //output
    response.status(200).send(movies);
  };

  return {
    getMovie,
    getMovieReviews,
    getMovieCredits,
    find,
    getUpcomingMovies,
    getMovieImages,
  };
};

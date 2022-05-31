import tvService from "../services";

export default (dependencies) => {
  const getTvShow = async (request, response, next) => {
    //input
    const tvId = request.params.id;
    // Treatment
    const show = await tvService.getTvShow(tvId, dependencies);
    //output
    response.status(200).json(show);
  };
  const getTvImages = async (request, response, next) => {
    //input
    const tvId = request.params.id;
    // Treatment
    const tvImages = await tvService.getTvImages(tvId, dependencies);
    //output
    response.status(200).json(tvImages);
  };
  const find = async (request, response, next) => {
    //input
    const query = request.query;
    // Treatment
    const accounts = await tvService.find(query, dependencies);
    //output
    response.status(200).json(accounts);
  };

  return {
    getTvShow,
    find,
    getTvImages,
  };
};

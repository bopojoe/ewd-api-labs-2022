import searchService from "../services";

export default (dependencies) => {

  const find = async (request, response, next) => {
    //input
    const query = request.query;
    console.log("query", query);
    // Treatment
    const accounts = await searchService.find(query.query, dependencies);
    //output
    response.status(200).json(accounts);
  };

  return {
    find,
  };
};

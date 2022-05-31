import express from "express";
import SearchController from "../controllers";
import AccountsController from "../../accounts/controllers";

const createSearchRouter = (dependencies) => {
  const router = express.Router();
  // load controllers with dependencies
  const searchController = SearchController(dependencies);
  const accountsController = AccountsController(dependencies);

  router.route("/*").all(accountsController.verifyToken);
  router.route("/").get(searchController.find);

  


  return router;
};
export default createSearchRouter;

import express from "express";
import TvController from "../controllers";
import AccountsController from "../../accounts/controllers";

const createTvRouter = (dependencies) => {
  const router = express.Router();
  // load controllers with dependencies
  const tvController = TvController(dependencies);
  const accountsController = AccountsController(dependencies);

  router.route("/*").all(accountsController.verifyToken);

  router.route("/:id").get(tvController.getTvShow);

  router.route("/").get(tvController.find);

  router.route("/images/:id").get(tvController.getTvImages);


  return router;
};
export default createTvRouter;

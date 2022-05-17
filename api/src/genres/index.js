import express from "express";
import { genres } from "./genresData";
import GenresController from "./controllers";
 const genresController = GenresController();

const router = express.Router();



router.get("/", (req, res) => {
  res.json(genresController.listGenres());
});



export default router;

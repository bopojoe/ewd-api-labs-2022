import createAccountsRouter from "./src/accounts/routes";
import db from "./src/config/db";
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from "./src/movies/routes";
import dotenv from "dotenv";
import express from "express";
import moviesRouter from "./src/movies";
import genresRouter from "./src/genres";

dotenv.config();

db.init();

const dependencies = buildDependencies();
const app = express();



const port = process.env.PORT;
app.use(express.json());
app.use("/api/movies", createMoviesRouter(dependencies));
app.use("/api/genres", genresRouter);
app.use("/api/accounts", createAccountsRouter(dependencies));


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

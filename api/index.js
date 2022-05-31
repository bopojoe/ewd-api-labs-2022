import createAccountsRouter from "./src/accounts/routes";
import db from "./src/config/db";
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from "./src/movies/routes";
import createTvRouter from "./src/tv/routes";
import createSearchRouter from "./src/search/routes";
import createGenreRouter from "./src/genres/routes";
import dotenv from "dotenv";
import express from "express";
import errorHandler from "./src/utils/ErrorHandler";
import cors from "cors";



dotenv.config();

db.init();

const dependencies = buildDependencies();
const app = express();



const port = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.json());
app.use("/api/movies", createMoviesRouter(dependencies));
app.use("/api/tv", createTvRouter(dependencies));
app.use("/api/search", createSearchRouter(dependencies));
app.use("/api/genres", createGenreRouter(dependencies));
app.use("/api/accounts", createAccountsRouter(dependencies));
app.use(errorHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

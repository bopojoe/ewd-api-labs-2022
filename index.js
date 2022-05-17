import createAccountsRouter from "./src/accounts/routes";
import buildDependencies from "./src/config/dependencies";
import dotenv from "dotenv";
import express from "express";
import moviesRouter from "./src/movies";
import genresRouter from "./src/genres";

dotenv.config();

const app = express();
const dependencies = buildDependencies();


const port = process.env.PORT;
app.use(express.json());
app.use("/api/movies", moviesRouter);
app.use("/api/genres", genresRouter);
app.use("/api/accounts", createAccountsRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

import Genre from "../../entities/Genres";
import mongoose from "mongoose";
import GenreRepository from "../Repository";

export default class extends GenreRepository {
  constructor() {
    super();
    const genresSchema = new mongoose.Schema({
      id: Number,
      name: String,
    });
    this.model = mongoose.model("Genre", genresSchema);
  }

   async get(genreId) {
    const result = await this.model.findById(genreId);
    const { id, name } = result;
    return new Genre(id, name);
  }

  async find() {
    const accounts = await this.model.find();
    return accounts.map((result) => {
      return new Genre(result.id, result.name);
    });
  }
}

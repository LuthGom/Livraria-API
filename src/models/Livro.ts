import mongoose from "mongoose";
import { ILivro } from "../interfaces/modelsInterfaces";

const { Schema } = mongoose;

const livroSchema = new Schema<ILivro>({
  titulo: { type: String, required: true },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
    required: true,
  },
  editora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "publisher",
    required: true,
  },
  volume: String,
  numeroDePaginas: String,
  isbn: Number,
  generoLiterario: String,
});

export const Livro = mongoose.model("books", livroSchema);

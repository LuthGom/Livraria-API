import mongoose from "mongoose";

const { Schema } = mongoose;

const livroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: mongoose.Types.ObjectId, ref: "autor", required: true },
  editora: { type: mongoose.Types.ObjectId, ref: "editora", required: true },
  volume: String,
  numeroDePaginas: String,
  isbn: Number,
  generoLiterario: String,
});

export const Livro = mongoose.model("livro", livroSchema);

import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const livroSchema = new Schema({
  titulo: String,
  autor: String,
  editora: String,
  edicao: String,
  noDePaginas: Number,
  generoLiterario: String,
  isbn: Number,
  preco: mongoose.Types.Decimal128,
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;

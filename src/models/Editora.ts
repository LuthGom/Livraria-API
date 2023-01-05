import mongoose, { Schema } from "mongoose";

const editoraSchema = new Schema({
  nomeEditora: String,
  emailEditora: String,
  cidadeSede: String,
  cnpj: String,
});

const Editora = mongoose.model("Editora", editoraSchema);

export default Editora;

import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const editoraSchema = new Schema({
  nome: String,
  cidade: String,
  cnpj: String,
});

export const Editora = mongoose.model("publisher", editoraSchema);

import mongoose, { mongo } from "mongoose";
import { IEditora } from "../interfaces/modelsInterfaces";

const { Schema } = mongoose;

const editoraSchema = new Schema<IEditora>({
  nome: String,
  cidade: String,
  cnpj: String,
});

export const Editora = mongoose.model("publisher", editoraSchema);

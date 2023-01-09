import mongoose, { mongo } from "mongoose";
import { IEditora } from "../interfaces/modelsInterfaces";

const { Schema } = mongoose;

const editoraSchema = new Schema<IEditora>({
  nome: { type: String, required: true },
  cidade: String,
  cnpj: { type: String, required: true },
});

export const Editora = mongoose.model("publisher", editoraSchema);

import mongoose, { Types } from "mongoose";
import { IAutor } from "../interfaces/modelsInterfaces";


const { Schema } = mongoose;

const autorSchema = new Schema<IAutor>({
  id: String,
  nome: { type: String, required: true },
  genero: String,
  origem: String,
});

export const Autor = mongoose.model("author", autorSchema);

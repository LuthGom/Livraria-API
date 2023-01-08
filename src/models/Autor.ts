import mongoose, { Types } from "mongoose";

interface IAutor {
  id: String;
  nome: String;
  genero: String;
  origem: String;
}

const { Schema } = mongoose;

const autorSchema = new Schema<IAutor>({
  id: String,
  nome: { type: String, required: true },
  genero: String,
  origem: String,
});

export const Autor = mongoose.model("author", autorSchema);

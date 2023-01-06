import mongoose from "mongoose";

const { Schema } = mongoose;

const autorSchema = new Schema({
  nome: String,
  genero: String,
  origem: String,
});

export const Autor = mongoose.model("autor", autorSchema);

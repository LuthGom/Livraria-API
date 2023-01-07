import mongoose from "mongoose";

const { Schema } = mongoose;

const autorSchema = new Schema({
  nome: { type: String, required: true },
  genero: String,
  origem: String,
});

export const Autor = mongoose.model("autor", autorSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const clienteSchema = new Schema({
  nome: String,
  senha: String,
  email: String,
});

export const Cliente = mongoose.model("client", clienteSchema);

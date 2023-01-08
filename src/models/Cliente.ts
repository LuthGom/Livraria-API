import mongoose from "mongoose";
import { ICliente } from "../interfaces/modelsInterfaces";

const { Schema } = mongoose;

const clienteSchema = new Schema<ICliente>({
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  email: { type: String, required: true },
  endereco: { type: Object, required: true },
});

export const Cliente = mongoose.model("client", clienteSchema);

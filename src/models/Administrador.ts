import mongoose from "mongoose";
import { IAdmin } from "../interfaces/modelsInterfaces";

const { Schema } = mongoose;

const adminSchema = new Schema<IAdmin>({
  nome: String,
  usuario_admin: String,
  senha: String,
  email: String,
});

export const Admin = mongoose.model("admin", adminSchema);

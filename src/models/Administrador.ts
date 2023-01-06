import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema({
  nome: String,
  usuario_admin: String,
  senha: String,
  email: String,
});

export const Admin = mongoose.model("admin", adminSchema);

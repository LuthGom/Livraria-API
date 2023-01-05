import mongoose, { Schema } from "mongoose";

const autorSchema = new Schema({
  nome: String,
  sexo: String,
});

const Autor = mongoose.model("Autor", autorSchema);

export default Autor;

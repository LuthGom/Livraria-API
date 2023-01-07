import { Router } from "express";
import AutorController from "../controllers/autorController";

const route = Router();

route
  .post("/autor", AutorController.cadastrarAutor)
  .get("/teste", AutorController.buscarTodosOsAutores);
export default route;

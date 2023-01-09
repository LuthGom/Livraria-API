import { Router } from "express";
import AutorController from "../controllers/autorController";

 const autorRoutes = Router();

autorRoutes
  .post("/autor", AutorController.cadastrarAutor)
  .get("/autores", AutorController.buscarTodosOsAutores)
  .get("/autor/:id", AutorController.buscarAutorPeloId)
  .put("/autor/atualizar/:id", AutorController.atualizarAutorPeloId)
  .delete("/autor/deletar/:id", AutorController.deletarAutorPeloId);
export default autorRoutes;

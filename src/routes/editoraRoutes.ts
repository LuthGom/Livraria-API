import { Router } from "express";
import EditoraController from "../controllers/editoraController";

const editoraRoutes = Router();

editoraRoutes
  .post("/editora", EditoraController.cadastrarEditora)
  .get("/editoras", EditoraController.listarTodasAsEditoras)
  .get("/editora/:id", EditoraController.listarEditoraPorId)
  .put("/editora/atualizar/:id", EditoraController.atualizarEditoraPorId)
  .delete("/editora/deletar/:id", EditoraController.deleteEditoraPorId);

export default editoraRoutes;

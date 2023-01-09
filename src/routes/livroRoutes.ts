import { Router } from "express";
import LivroController from "../controllers/livroController";

const livroRoutes = Router();

livroRoutes
  .post("/livro", LivroController.cadastrarLivro)
  .get("/livros", LivroController.listarTodosOsLivros)
  .get("livro/:id", LivroController.listarLivroPeloId)
  .put("/livro/atualizar/:id", LivroController.atualizarLivroPeloId)
  .delete("/livro/deletar/:id", LivroController.deletarLivroPeloId);

export default livroRoutes;

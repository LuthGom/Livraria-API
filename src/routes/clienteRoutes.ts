import { Router } from "express";

import ClienteController from "../controllers/clienteController";

const clienteRoutes = Router();

clienteRoutes
  .post("/cliente", ClienteController.cadastrarCliente)
  .get("/clientes", ClienteController.buscarTodosOsClientes)
  .get("/cliente/:id", ClienteController.buscarClientePeloId)
  .put("/cliente/atualizar/:id", ClienteController.atualizarClientePeloId)
  .delete("/cliente/deletar/:id", ClienteController.deletarClientePeloId);

export default clienteRoutes;

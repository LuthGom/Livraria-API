import autorRoutes from "./autorRoutes";
import clienteRoutes from "./clienteRoutes";
import express, { Express } from "express";

const routes = (app: Express) => {
  app.use(express.json(), autorRoutes, clienteRoutes);
};

export default routes;

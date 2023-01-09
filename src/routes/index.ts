import autorRoutes from "./autorRoutes";
import clienteRoutes from "./clienteRoutes";
import express, { Express } from "express";
import livroRoutes from "./livroRoutes";
import editoraRoutes from "./editoraRoutes";

const routes = (app: Express) => {
  app.use(
    express.json(),
    autorRoutes,
    clienteRoutes,
    livroRoutes,
    editoraRoutes
  );
};

export default routes;

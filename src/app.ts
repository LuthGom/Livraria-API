import express, { Router, Request, Response } from "express";
import db from "./database/dbConnection";
const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ mensagem: "testando request" });
});
db;
app.use(route);

export default app;

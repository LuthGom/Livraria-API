import express, { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "testando api" });
});

app.use(route);

app.listen(3000, () => console.log("servidor rodando na porta 3000"));

import express, { Router } from "express";
const app = express();
const route = Router();
app.use(express.json());
route.get("/", (req, res) => {
    res.json({ message: "testando api" });
});
app.use(route);
app.listen(3000, () => console.log("servidor rodando na porta 3000"));
//# sourceMappingURL=server.js.map
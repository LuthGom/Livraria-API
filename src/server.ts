import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log("servidor rodando na porta 3000"));

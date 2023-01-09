import express from "express";
import db from "./database/dbConnection";
import routes from "./routes/index";
const app = express();

app.use(express.json());

db;
routes(app);

export default app;

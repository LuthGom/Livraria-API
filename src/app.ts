import express from "express";
import db from "./database/dbConnection";
import route from "./routes/autorRoutes";
const app = express();

app.use(express.json());


db;
app.use(route);

export default app;

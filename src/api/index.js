import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Router } from "../routes/routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(Router);

app.get("/", (_, res) => {
  res.status(200).json({ sucesso: true });
});

app.listen(3005, () => console.log("Api rodando..."));

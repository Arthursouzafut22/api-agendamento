import express from "express";
import { pool } from "../models/db.js";

const app = express();


app.get("/",(req,res) => {
    res.status(200).json({sucesso: true})
})

app.get("/api/services", async (_, res) => {
  try {
    const query = await pool.query("SELECT * FROM servicos");
    res.status(200).json(query.rows);
  } catch (erro) {
    console.error("Erro ao buscar serviços:", erro);
    res.status(500).json({ error: "Erro em buscar servicos" });
  }
});


app.all("*", (_, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

export default app;

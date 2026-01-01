import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "../routes/routes.js";
import path from "path";
// import { bot } from "../functions/botTelegram.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;
app.use(express.json());
app.use(cors());
// app.use("/telegram", bot.webhookCallback("/telegram"));
app.use(router);
app.use("/imagem", express.static(path.resolve("img/image")));

app.listen(PORT, () => console.log("Api rodando..."));

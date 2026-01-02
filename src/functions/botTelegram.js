import { Telegraf } from "telegraf";
import { pool } from "../models/db.js";
import dotenv from "dotenv";

dotenv.config();

export const bot = new Telegraf(process.env.TOKEN);

// Receber o callback do bot...
bot.on("callback_query", async (ctx) => {
  const data = ctx.callbackQuery.data;

  if (!data) return;

  const [acao, agendamentoId] = data.split("_");

  let status = "Pendente";

  if (acao === "aceitar") status = "aceito";
  if (acao === "recusar") status = "recusado";

  await pool.query("UPDATE agendamentos SET status = $1 WHERE id = $2", [
    status,
    agendamentoId,
  ]);

  await ctx.answerCbQuery(
    status === "aceito" ? "Agendamento aceito ✅" : "Agendamento recusado ❌"
  );

  await ctx.editMessageText(`Agendamento ${status.toUpperCase()}`);
});

// Enviar o agendamento para o bot...
export async function sendScheduling({
  Nome,
  Servico,
  Data,
  Horario,
  usuario_id,
}) {
  const chat_id = process.env.CHAT_ID;

  const texto = `
  *Novo Agendamento Recebido!*

  *ID:* ${usuario_id}
  *Cliente:* ${Nome}
  *Serviço:* ${Servico}
  *Data*: ${new Date(Data).toLocaleDateString()}
  *Horário:* ${Horario}

  Deseja aceitar este agendamento?
`;

  await bot.telegram.sendMessage(chat_id, texto, {
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Aceitar", callback_data: `aceitar_${usuario_id}` },
          { text: "❌ Recusar", callback_data: `recusar_${usuario_id}` },
        ],
      ],
    },
  });
}

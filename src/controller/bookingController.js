import { sendScheduling } from "../functions/botTelegram.js";
import { Booking } from "../models/bookingModel.js";

const model = new Booking();

export async function booking(req, res) {
  const { Nome, Telefone, Servico, Data, Horario, usuario_id } = req.body;

  if (!Nome || !Telefone || !Servico || !Data || !Horario || !usuario_id) {
    return res.status(400).json({ error: "Os dados são obrigatórios." });
  }
  try {
    const book = await model.createBooking(req.body);
    await sendScheduling({
      Nome,
      Servico,
      Data,
      Horario,
      usuario_id: book?.id,
    });

    res.status(201).json({ mensagem: "Agendamento feito com sucesso!" });
  } catch (erro) {
    console.error(erro);
    res.status(400).json({ error: "Não foi possivel realizar o agendamento!" });
  }
}

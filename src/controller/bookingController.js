import { Booking } from "../models/BookingModel.js";

const model = new Booking();

export async function booking(req, res) {
  const { Nome, Telefone, Servico, Data, Horario, usuario_id } = req.body;

  if (!Nome || !Telefone || !Servico || !Data || !Horario || !usuario_id) {
    return res.status(400).json({ error: "Os dados são obrigatórios." });
  }
  try {
    await model.createBooking(req.body);
    res.status(201).json({ mensagem: "Agendamento feito com sucesso!" });
  } catch (erro) {
    console.error(erro);
    res.status(400).json({ error: "Não foi possivel fazer a reserva!" });
  }
}

import { pool } from "./db.js";

export class Model {
  // Buscar serviços...
  getService = async (_, res) => {
    try {
      const query = await pool.query("SELECT * FROM servicos");
      res.status(200).json(query.rows);
    } catch (erro) {
      console.error("Erro ao buscar serviços:", erro);
      res.status(500).json({ error: "Erro em buscar servicos" });
    }
  };
  // Criar agendamentos...
  createBooking = async (req, res) => {
    const { cliente, telefone, servico, data, horario } = req.body;

    if (!cliente || !telefone || !servico || !data || !horario) {
      return res.status(400).json({ error: "Os dados são obrigatórios." });
    }
    try {
      await pool.query(
        "INSERT INTO agendamentos (cliente, telefone, servico, data, horario) VALUES ($1,$2,$3,$4,$5)",
        [cliente, telefone, servico, data, horario]
      );

      res.status(201).json({ mensagem: "Agendamento feito com sucesso!" });
    } catch (erro) {
      console.error(erro);
      res.status(400).json({ error: "Não foi possivel fazer a reserva!" });
    }
  };
}

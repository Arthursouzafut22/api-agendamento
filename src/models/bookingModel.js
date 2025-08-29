import { pool } from "./db.js";

class Booking {
  createBooking = async ({ Nome, Telefone, Servico, Data, Horario, usuario_id }) => {
    const query = await pool.query(
      "INSERT INTO agendamentos (cliente, telefone, servico, data, horario, usuario_id) VALUES ($1,$2,$3,$4,$5,$6)",
      [Nome, Telefone, Servico, Data, Horario, usuario_id]
    );
    return query;
  };
}

export { Booking };

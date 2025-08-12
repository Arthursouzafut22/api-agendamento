import { pool } from "./db.js";

class Booking {
  createBooking = async ({ cliente, telefone, servico, data, horario }) => {
    const query = await pool.query(
      "INSERT INTO agendamentos (cliente, telefone, servico, data, horario) VALUES ($1,$2,$3,$4,$5)",
      [cliente, telefone, servico, data, horario]
    );
    return query;
  };
}

export { Booking };

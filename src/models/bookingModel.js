import { pool } from "./db.js";

class Booking {
  createBooking = async ({ Nome, Telefone, Servico, Data, Horario }) => {
    const query = await pool.query(
      "INSERT INTO agendamentos (cliente, telefone, servico, data, horario) VALUES ($1,$2,$3,$4,$5)",
      [Nome, Telefone, Servico, Data, Horario]
    );
    return query;
  };
}

export { Booking };

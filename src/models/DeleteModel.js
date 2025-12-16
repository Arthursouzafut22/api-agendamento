import { pool } from "./db.js";

export class DeleteModel {

  deleteBooking = async (id) => {
    const query = await pool.query("DELETE FROM agendamentos WHERE id = $1", [
      id,
    ]);
    return query;
  };
}

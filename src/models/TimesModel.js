import { pool } from "./db.js";

class TimesModel {
  getTimes = async (data) => {
    const result = await pool.query(
      "SELECT horario FROM agendamentos WHERE data = $1",
      [data]
    );

    return result;
  };
}

export { TimesModel };

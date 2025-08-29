import { pool } from "./db.js";

class UserScheduleModel {
  getSchedule = async (id) => {
    const result = await pool.query(
      "SELECT * FROM agendamentos WHERE usuario_id = $1",
      [id]
    );

    return result;
  };
}

export { UserScheduleModel };

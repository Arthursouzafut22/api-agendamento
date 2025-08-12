import { pool } from "./db.js";

class ServiceModel {
  async getServive() {
    const query = await pool.query("SELECT * FROM servicos");
    return query.rows;
  }
}

export { ServiceModel };

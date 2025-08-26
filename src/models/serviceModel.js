import { pool } from "./db.js";

class ServiceModel {
  getServive = async () => {
    const query = await pool.query("SELECT * FROM servicos");
    return query.rows;
  };
}

export { ServiceModel };

import { UserScheduleModel } from "../models/UserScheduleModel.js";

const scheduleModel = new UserScheduleModel();

export async function userSchedule(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "ID do usuário é obrigatório" });
  }

  try {
    const result = await scheduleModel.getSchedule(id);
    return res.status(200).json({ meus_agendamentos: result.rows });
  } catch (error) {
    console.error("Error internamente ao buscar ID do usuário", error);
    res.status(500).json({ error: "Error ao buscar ID do usuário" });
  }
}

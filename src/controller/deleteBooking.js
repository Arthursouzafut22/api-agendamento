import { DeleteModel } from "../models/DeleteModel.js";

export async function deleteBooking(req, res) {
  const deleteModel = new DeleteModel();

  const { id } = req.params;

  try {
    const fs = await deleteModel.deleteBooking(id);
    
    if (fs.rowCount === 0) {
      return res.status(404).json({ message: "ID não encontrado" });
    }

    return res
      .status(200)
      .json({ sucesso: true, message: "Agendamento cancelado com sucesso." });
  } catch (erro) {
    return res
      .status(500)
      .json({ sucesso: false, message: "Erro ao cancelar agendamento." });
  }
}

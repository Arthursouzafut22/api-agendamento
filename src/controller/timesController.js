import { TimesModel } from "../models/timesModel.js";

const time = new TimesModel();

export async function timesController(req, res) {
  const data = req.query.data;

  if (!data) {
    return res.status(400).json({ error: "Data e obrigatoria" });
  }

  const horariosTrabalho = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  try {
    const result = await time.getTimes(data);

    const horariosOcupados = result.rows.map((item) =>
      item.horario.toString().slice(0, 5)
    );

    const horariosDisponiveis = horariosTrabalho.filter(
      (item) => !horariosOcupados.includes(item)
    );

    return res.status(200).json({ horariosDisponiveis });
  } catch (error) {
    console.error("Não foi possível buscar horários disponíveis", error);
    return res
      .status(500)
      .json({ error: "Error interno em buscar horários disponíveis" });
  }
}

import { ServiceModel } from "../models/serviceModel.js";

const model = new ServiceModel();

export async function getServices(_, res) {
  try {
    const service = await model.getServive();
    res.status(200).json(service);
  } catch (erro) {
    console.error("Erro ao buscar serviços:", erro);
    res.status(500).json({ error: "Erro em buscar servicos" });
  }
}

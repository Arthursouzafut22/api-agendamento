import { Model } from "../models/queries.js";

const model = new Model();

export async function getServices(_, res) {
  await model.getService(_, res);
}

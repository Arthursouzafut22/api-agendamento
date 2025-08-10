import { Model } from "../models/queries.js";

const model = new Model();

export async function booking(req, res) {
  await model.createBooking(req, res);
}

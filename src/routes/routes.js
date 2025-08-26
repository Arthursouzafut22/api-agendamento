import express from "express";
import { getServices } from "../controller/serviceController.js";
import { booking } from "../controller/bookingController.js";
import { timesController } from "../controller/timesController.js";

const router = express.Router();

router.get("/services", getServices);
router.post("/booking", booking);
router.get("/horarios-disponiveis", timesController);

export { router };

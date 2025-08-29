import express from "express";
import { getServices } from "../controller/serviceController.js";
import { booking } from "../controller/bookingController.js";
import { timesController } from "../controller/timesController.js";
import { userSchedule } from "../controller/UserScheduleController.js";

const router = express.Router();

router.get("/", (_, res) => res.json({ sucesso: true }));
router.get("/services", getServices);
router.post("/booking", booking);
router.get("/horarios-disponiveis", timesController);
router.get("/booking/:id", userSchedule);

export { router };

import express from "express";
import { getServices } from "../controller/serviceController.js";
import { booking } from "../controller/bookingController.js";
import { timesController } from "../controller/timesController.js";
import { userScheduleController } from "../controller/userScheduleController.js";
import { deleteBooking } from "../controller/deleteBooking.js";


const router = express.Router();

router.get("/", (_, res) => res.json({ services: "/services" }));
router.get("/services", getServices);
router.post("/booking", booking);
router.get("/horarios-disponiveis", timesController);
router.get("/booking/:id", userScheduleController);
router.delete("/booking/:id", deleteBooking);

export { router };

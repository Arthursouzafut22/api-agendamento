import express from "express";
import { getServices } from "../controller/serviceController.js";
import { booking } from "../controller/bookingController.js";

const router = express.Router();

router.get("/services", getServices);
router.post("/booking", booking);

export { router };

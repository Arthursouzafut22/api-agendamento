import express from "express";
import { getServices } from "../controller/serviceController.js";
import { booking } from "../controller/bookingController.js";

const Router = express.Router();

Router.get("/services", getServices);
Router.post("/booking", booking);

export { Router };

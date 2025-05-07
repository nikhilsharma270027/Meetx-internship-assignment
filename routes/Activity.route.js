import express from "express";
import { getAllActivities } from "../controllers/ActivityController.js";

const router = express.Router();

router.get("/allactivites", getAllActivities); // Public route to get activities

export default router;

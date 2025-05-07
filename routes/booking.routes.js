import express from "express";
import { bookActivity, getMyBookings } from "../controllers/BookingController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/book",authMiddleware,  bookActivity);// POST /api/book

router.get('/my-bookings', authMiddleware, getMyBookings);// Route to get all bookings for the logged-in user

export default router;

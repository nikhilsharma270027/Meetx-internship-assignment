import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Import routes
import authRoutes from './routes/User.route.js'
import cookieParser from "cookie-parser";
import AuthMiddleware from './middleware/AuthMiddleware.js';
import activityRoutes from './routes/Activity.route.js';
import bookingRoutes from './routes/booking.routes.js';
import connectDB from "./config/db.js";

const app = express();

// Middlewares
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

// Connect to DB
connectDB();

// Authentication middleware
app.use(AuthMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
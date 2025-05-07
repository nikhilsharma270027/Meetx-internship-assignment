import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      required: true,
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    activity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
      required: true,
    },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
import Booking from "../models/booking.model.js";
import Activity from "../models/activity.model.js";

export const bookActivity = async (req, res) => {
  const { activityId } = req.body;
  console.log(req.body);

  if (!activityId) {
    return res.status(400).json({ success: false, message: "Activity ID is required" });
  }

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ success: false, message: "Activity not found" });
    }

    const existingBooking = await Booking.findOne({ user: req.user._id, activity: activityId });
    if (existingBooking) {
      return res.status(400).json({ success: false, message: "You have already booked this activity" });
    }

    const booking = await Booking.create({
      user: req.user._id,
      activity: activityId,
    });

    // / Populate activity details in the booking response
    const populatedBooking = await Booking.findById(booking._id).populate('activity');

    res.status(201).json({
      success: true,
      message: "Activity booked successfully",
      booking: populatedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Booking failed", error: error.message });
  }
};

// Get all bookings for the logged-in user
export const getMyBookings = async (req, res) => {
  try {
    // Find all bookings for the logged-in user
    const bookings = await Booking.find({ user: req.user._id })
      .populate('activity'); // include activity details for each booking

    if (!bookings.length) {
      return res.status(404).json({ success: false, message: "No bookings found" });
    }

    // Return the list of bookings
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, message: "Failed to fetch bookings", error: error.message });
  }
};

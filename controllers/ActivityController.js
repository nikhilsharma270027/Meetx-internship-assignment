import Activity from "../models/activity.model.js"; 

// Get all activities
export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    
    // If no activities found
    if (!activities || activities.length === 0) {
      return res.status(404).json({ success: false, message: "No activities found" });
    }

    return res.status(200).json({ success: true, activities });
  } catch (error) {
    console.error("Error fetching activities:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

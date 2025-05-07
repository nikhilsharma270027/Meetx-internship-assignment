import mongoose from "mongoose";
import Activity from "../models/activity.model.js"; 

const activities = [
  {
    title: "Cricket Match",
    description: "A fun match to watch.",
    location: "Stadium XYZ",
    date: new Date("2025-05-10T14:00:00.000Z"),
    time: "14:00",
  },
  {
    title: "Football Match",
    description: "Join the football fans!",
    location: "Football Arena",
    date: new Date("2025-05-12T16:00:00.000Z"),
    time: "16:00",
  },
  {
    title: "Rock Concert",
    description: "A night of electrifying rock music.",
    location: "Arena 2025",
    date: new Date("2025-06-01T19:00:00.000Z"),
    time: "19:00",
  },
  {
    title: "Art Exhibition",
    description: "Discover art from talented local artists.",
    location: "Art Gallery Downtown",
    date: new Date("2025-05-15T10:00:00.000Z"),
    time: "10:00",
  },
  {
    title: "Football Training Session",
    description: "Enhance your skills in this football training camp.",
    location: "Training Ground XYZ",
    date: new Date("2025-05-20T08:00:00.000Z"),
    time: "08:00",
  },
  {
    title: "Yoga for Beginners",
    description: "A peaceful morning yoga session.",
    location: "Park Lane",
    date: new Date("2025-06-05T06:30:00.000Z"),
    time: "06:30",
  },
  {
    title: "Cooking Workshop",
    description: "Learn to cook delicious meals in this workshop.",
    location: "Kitchen Studio",
    date: new Date("2025-06-10T11:00:00.000Z"),
    time: "11:00",
  },
  {
    title: "Movie Night",
    description: "Come watch a blockbuster movie with friends.",
    location: "Cinema Hall A",
    date: new Date("2025-06-12T18:30:00.000Z"),
    time: "18:30",
  },
];

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Insert activities into the database
    Activity.insertMany(activities)
      .then(() => {
        console.log("Activities added successfully!");
      })
      .catch((err) => {
        console.error("Error inserting activities:", err);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

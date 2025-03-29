const express = require("express");
const router = express.Router();
const Mentorship = require("../models/Mentorship");

// POST endpoint to save mentorship form data
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, careerGoal, preferredMentorshipType, experienceLevel, message } = req.body;

    // Basic validation (all fields are required)
    if (!name || !email || !phone || !careerGoal || !preferredMentorshipType || !experienceLevel || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newMentorship = new Mentorship({
      name,
      email,
      phone,
      careerGoal,
      preferredMentorshipType,
      experienceLevel,
      message
    });

    await newMentorship.save();
    res.status(201).json({ success: true, message: "Mentorship form submitted successfully!" });
  } catch (error) {
    console.error("Error saving mentorship data:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

module.exports = router;

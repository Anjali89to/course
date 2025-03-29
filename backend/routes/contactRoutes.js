const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// 📌 Contact Form Data Save API
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // ✅ New Contact Object
    const newContact = new Contact({ name, email, phone, message });

    // ✅ Save in MongoDB
    await newContact.save();

    res.status(201).json({ success: true, message: "Contact saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

module.exports = router;

const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// 📌 Contact Form Data Save API (POST)
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

// 📌 Contact Form Data Fetch API (GET)
router.get("/contact", async (req, res) => {
  try {
    // Fetch all contact form data from MongoDB
    const contacts = await Contact.find();

    // Response with the list of all contacts
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// 📌 Contact Form Data Fetch by ID (GET)
router.get("/contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);  // Find by ID

    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

module.exports = router;

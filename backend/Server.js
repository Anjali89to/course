const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const mentorshipRoutes = require("./routes/mentorshipRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// Use routes
app.use("/api", contactRoutes);  // Updated contact routes
app.use("/api/mentorship", mentorshipRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("ThinkAcademies Backend Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

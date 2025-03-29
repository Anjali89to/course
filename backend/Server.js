const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // ✅ Import CORS
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const mentorshipRoutes = require("./routes/mentorshipRoutes");


dotenv.config();
connectDB();

const app = express();
app.use(cors()); // ✅ Enable CORS
app.use(express.json());

app.use("/api", contactRoutes);
app.use("/api/mentorship", mentorshipRoutes);


app.get("/", (req, res) => {
  res.send("ThinkAcademies Backend Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

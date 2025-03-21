const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  });
app.use(limiter);

connectDB();

app.get("/", (req, res) => {
    res.send("Job Board API is running...");
  });

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);

const applicationRoutes = require("./routes/applicationRoutes");
app.use("/api/applications", applicationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
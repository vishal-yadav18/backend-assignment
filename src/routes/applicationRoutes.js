const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { applyForJob } = require("../controllers/applicationController");

const router = express.Router();

router.post("/", protect, applyForJob);

module.exports = router;

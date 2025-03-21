const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

router.post("/", protect, createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.put("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);

module.exports = router;

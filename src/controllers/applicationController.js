const Application = require("../models/Application");
const Job = require("../models/Job");

const applyForJob = async (req, res) => {
  try {
    if (req.user.role !== "candidate") {
      return res.status(403).json({ message: "Only candidates can apply for jobs" });
    }

    const { jobId, resume, coverLetter } = req.body;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const existingApplication = await Application.findOne({ job: jobId, candidate: req.user._id });
    if (existingApplication) {
      return res.status(400).json({ message: "You have already applied for this job" });
    }

    const application = await Application.create({
      job: jobId,
      candidate: req.user._id,
      resume,
      coverLetter,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { applyForJob };

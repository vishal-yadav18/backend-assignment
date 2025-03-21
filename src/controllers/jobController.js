const Job = require("../models/Job");

const createJob = async (req, res) => {
  try {
    if (req.user.role !== "employer") {
      return res.status(403).json({ message: "Only employers can post jobs" });
    }

    const { title, description, company, location, salary } = req.body;

    const job = await Job.create({
      title,
      description,
      company,
      location,
      salary,
      postedBy: req.user._id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("postedBy", "name email");
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.postedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this job" });
    }

    const { title, description, company, location, salary } = req.body;
    job.title = title || job.title;
    job.description = description || job.description;
    job.company = company || job.company;
    job.location = location || job.location;
    job.salary = salary || job.salary;

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.postedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this job" });
    }

    await job.deleteOne();
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createJob, getJobs, getJobById, updateJob, deleteJob };

const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Job", required: true
    },
    candidate: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    resume: { 
        type: String, 
        required: true 
    },
    coverLetter: { 
        type: String 
    },
    status: { 
        type: String, 
        enum: ["pending", "reviewed", "rejected", "accepted"], 
        default: "pending" 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);

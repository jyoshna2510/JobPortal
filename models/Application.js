const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  user: { type: String, required: true }, // simple username/email
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);

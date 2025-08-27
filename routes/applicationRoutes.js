import express from "express";
import { jobs, applications } from "../seed.js";

const router = express.Router();

// ➤ Apply for a job
router.post("/", (req, res) => {
  const { user, jobId } = req.body;

  const job = jobs.find(j => j.id === jobId);
  if (!job) return res.status(404).json({ message: "❌ Job not found" });

  const exists = applications.find(a => a.user === user && a.jobId === jobId);
  if (exists) return res.status(400).json({ message: "⚠️ Already applied for this job" });

  const newApp = { id: applications.length + 1, user, jobId, appliedAt: new Date() };
  applications.push(newApp);
  res.json(newApp);
});

// ➤ List user applications
router.get("/:user", (req, res) => {
  const userApps = applications
    .filter(a => a.user === req.params.user)
    .map(a => ({
      ...a,
      job: jobs.find(j => j.id === a.jobId) || {}
    }));
  res.json(userApps);
});

// ➤ Delete application
router.delete("/:id", (req, res) => {
  const appIndex = applications.findIndex(a => a.id === parseInt(req.params.id));
  if (appIndex === -1) return res.status(404).json({ message: "Application not found" });

  applications.splice(appIndex, 1);
  res.json({ message: "🗑️ Application deleted" });
});

export default router;

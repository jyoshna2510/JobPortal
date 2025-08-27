import express from "express";
import { jobs } from "../seed.js";

const router = express.Router();

// ➤ List all jobs
router.get("/", (req, res) => {
  res.json(jobs);
});

// ➤ Search job by keyword
router.get("/search/:keyword", (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const results = jobs.filter(job => job.title.toLowerCase().includes(keyword));
  res.json(results);
});

export default router;

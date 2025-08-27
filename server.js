import express from "express";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

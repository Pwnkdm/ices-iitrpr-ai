import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// All authenticated users can access dashboard
router.get("/", protect, getDashboard);

export default router;

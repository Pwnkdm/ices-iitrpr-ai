import express from "express";
const router = express.Router();
import {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} from "../controllers/dataController.js";
import { protect } from "../middleware/auth.js";
import { checkRole } from "../middleware/roleCheck.js";
import { schemas, validateRequest } from "../middleware/validator.js";

// Only admin and superadmin can access these routes (pending can't)
router.get("/", protect, checkRole(["admin", "superadmin"]), getAllData);
router.get("/:id", protect, checkRole(["admin", "superadmin"]), getDataById);

// Only superadmin can access these routes
router.post(
  "/",
  protect,
  checkRole(["superadmin"]),
  validateRequest(schemas.dataCreate),
  createData
);
router.put(
  "/:id",
  protect,
  checkRole(["superadmin"]),
  validateRequest(schemas.dataUpdate),
  updateData
);
router.delete("/:id", protect, checkRole(["superadmin"]), deleteData);

export default router;

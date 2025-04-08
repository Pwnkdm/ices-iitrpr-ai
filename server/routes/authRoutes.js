import express from "express";
const router = express.Router();

import { protect } from "../middleware/auth.js";
import { checkRole } from "../middleware/roleCheck.js";
import loginLimiter from "../middleware/rateLimiter.js";
import validatePassword from "../middleware/passwordValidator.js";
import { validateRequest, schemas } from "../middleware/validator.js";
import {
  registerUser,
  loginUser,
  promoteUser,
  demoteUser,
  getUsers,
  approveUser,
  revokeAccess,
  getPendingUsers,
} from "../controllers/authController.js";

router.post(
  "/register",
  validatePassword,
  validateRequest(schemas.userRegister),
  registerUser
);
router.post(
  "/login",
  loginLimiter,
  validateRequest(schemas.userLogin),
  loginUser
);

// Superadmin only routes
router.get("/users", protect, checkRole(["superadmin"]), getUsers);
router.get("/pending", protect, checkRole(["superadmin"]), getPendingUsers);
router.put("/approve/:id", protect, checkRole(["superadmin"]), approveUser);
router.put("/revoke/:id", protect, checkRole(["superadmin"]), revokeAccess);
router.put("/promote/:id", protect, checkRole(["superadmin"]), promoteUser);
router.put("/demote/:id", protect, checkRole(["superadmin"]), demoteUser);

export default router;

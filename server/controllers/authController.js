import jwt from "jsonwebtoken";
import Admin from "../model/adminModel.js";

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Note: role removed from destructuring

    // Check if user already exists
    const userExists = await Admin.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user with default 'pending' role only
    const user = await Admin.create({
      name,
      email,
      password,
      // role will default to 'pending' as defined in the model
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for user email
    const user = await Admin.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Promote user to superadmin
// @route   PUT /api/auth/promote/:id
// @access  Private/SuperAdmin
const promoteUser = async (req, res) => {
  try {
    const user = await Admin.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Only superadmins can promote
    if (req.user.role !== "superadmin") {
      return res
        .status(403)
        .json({ message: "Not authorized to promote users" });
    }

    user.role = "superadmin";
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Demote user to admin
// @route   PUT /api/auth/demote/:id
// @access  Private/SuperAdmin
const demoteUser = async (req, res) => {
  try {
    const user = await Admin.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Only superadmins can demote
    if (req.user.role !== "superadmin") {
      return res
        .status(403)
        .json({ message: "Not authorized to demote users" });
    }

    // Check if this is the last superadmin
    const superadminCount = await Admin.countDocuments({ role: "superadmin" });
    if (superadminCount <= 1 && user.role === "superadmin") {
      return res
        .status(400)
        .json({ message: "Cannot demote the last superadmin" });
    }

    user.role = "admin";
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all users (for superadmins)
// @route   GET /api/auth/users
// @access  Private/SuperAdmin
const getUsers = async (req, res) => {
  try {
    const users = await Admin.find({}).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await req.user;
    console.log(profile, "profile");

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Approve user to admin role
// @route   PUT /api/auth/approve/:id
// @access  Private/SuperAdmin
const approveUser = async (req, res) => {
  try {
    const user = await Admin.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Only superadmins can approve
    if (req.user.role !== "superadmin") {
      return res
        .status(403)
        .json({ message: "Not authorized to approve users" });
    }

    if (user.role !== "pending") {
      return res.status(400).json({ message: "User is already approved" });
    }

    user.role = "admin";
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Revoke user access (set back to pending)
// @route   PUT /api/auth/revoke/:id
// @access  Private/SuperAdmin
const revokeAccess = async (req, res) => {
  try {
    const user = await Admin.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Only superadmins can revoke
    if (req.user.role !== "superadmin") {
      return res
        .status(403)
        .json({ message: "Not authorized to revoke access" });
    }

    // Cannot revoke superadmin
    if (user.role === "superadmin") {
      return res
        .status(400)
        .json({ message: "Cannot revoke access from a superadmin" });
    }

    user.role = "pending";
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get pending users list
// @route   GET /api/auth/pending
// @access  Private/SuperAdmin
const getPendingUsers = async (req, res) => {
  try {
    const pendingUsers = await Admin.find({ role: "pending" }).select(
      "-password"
    );
    res.json(pendingUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export the new functions
export {
  registerUser,
  loginUser,
  promoteUser,
  demoteUser,
  getUsers,
  getProfile,
  approveUser,
  revokeAccess,
  getPendingUsers,
};

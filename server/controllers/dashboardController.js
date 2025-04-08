// @desc    Get available actions based on user role
// @route   GET /api/dashboard
// @access  Private
export const getDashboard = async (req, res) => {
  try {
    const { role } = req.user;

    let availableActions = {
      canViewProfile: true,
      canViewData: false,
      canManageData: false,
      canManageUsers: false,
    };

    // Set permissions based on role
    if (role === "admin") {
      availableActions.canViewData = true;
    } else if (role === "superadmin") {
      availableActions.canViewData = true;
      availableActions.canManageData = true;
      availableActions.canManageUsers = true;
    }

    res.json({
      user: {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
      availableActions,
      message:
        role === "pending"
          ? "Your account is pending approval from a superadmin. You'll be notified when approved."
          : `Welcome, you are logged in as ${role}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

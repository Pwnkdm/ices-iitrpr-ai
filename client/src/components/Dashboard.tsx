// src/components/Dashboard.tsx
import React from "react";
import { useGetDashboardQuery } from "../store/services/dashboardApi";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { data: dashboardData, isLoading: isDashboardLoading } =
    useGetDashboardQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (isDashboardLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard-container p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Dashboard
      </h2>

      <div className="user-info bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          User Information
        </h3>
        {dashboardData?.user && (
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <strong>Name:</strong> {dashboardData?.user?.name}
            </p>
            <p>
              <strong>Email:</strong> {dashboardData?.user?.email}
            </p>
            <p>
              <strong>Role:</strong> {dashboardData?.user?.role}
            </p>
          </div>
        )}
      </div>

      <div className="available-actions bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Available Actions
        </h3>

        <div className="navigation flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {dashboardData?.user?.role === "superadmin" && (
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/users")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Manage Users
              </button>
              <button
                onClick={() => navigate("/data")}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Manage Data
              </button>
            </div>
          )}
          {dashboardData?.user?.role === "admin" && (
            <button
              onClick={() => navigate("/data")}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              View Data
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

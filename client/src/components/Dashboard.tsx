// src/components/Dashboard.tsx
import React from "react";
import { useGetDashboardQuery } from "../store/services/dashboardApi";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { api } from "../store/api";

const Dashboard: React.FC = () => {
  const {
    data: dashboardData,
    isLoading: isDashboardLoading,
    isError,
  } = useGetDashboardQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
      dispatch(api.util.resetApiState());
      navigate("/login");
    }
  };

  if (isError) {
    return navigate("/login");
  }

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

      <div className="user-info bg-white shadow-md border-2 border-neutral-500 p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          User Information
        </h3>
        {dashboardData?.user && (
          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 rounded-lg p-3 transition duration-300 ease-in-out max-w-auto">
              <span className="font-semibold text-blue-700">Name:</span>
              <span className="text-blue-600 truncate">
                {dashboardData?.user?.name}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 rounded-lg p-3 transition duration-300 ease-in-out max-w-auto">
              <span className="font-semibold text-green-700">Email:</span>
              <span className="text-green-600 truncate">
                {dashboardData?.user?.email}
              </span>
            </div>

            {/* Role Section with Dynamic Colors */}
            <div
              className={`flex items-center space-x-2 rounded-lg p-3 transition duration-300 ease-in-out max-w-auto ${
                dashboardData?.user?.role === "superadmin"
                  ? "bg-yellow-50 hover:bg-yellow-100"
                  : dashboardData?.user?.role === "admin"
                  ? "bg-blue-50 hover:bg-blue-100"
                  : "bg-gray-50 hover:bg-gray-100" // Default background if role is not admin or superadmin
              }`}
            >
              <span
                className={`font-semibold ${
                  dashboardData?.user?.role === "superadmin"
                    ? "text-yellow-700"
                    : dashboardData?.user?.role === "admin"
                    ? "text-blue-700"
                    : "text-gray-700"
                }`}
              >
                Role:
              </span>
              <span
                className={`truncate ${
                  dashboardData?.user?.role === "superadmin"
                    ? "text-yellow-600"
                    : dashboardData?.user?.role === "admin"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {dashboardData?.user?.role}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="available-actions bg-white border-2 border-neutral-500 shadow-md  p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Available Actions
        </h3>

        <div className="navigation flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {(dashboardData?.user?.role === "superadmin" ||
            dashboardData?.user?.role === "supremeadmin") && (
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/users")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800  hover:rounded-3xl transition-all duration-300 ease-in-out
"
              >
                Manage Users
              </button>
              <button
                onClick={() => navigate("/data")}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800  hover:rounded-3xl transition-all duration-300 ease-in-out
"
              >
                Manage Data
              </button>
            </div>
          )}
          {dashboardData?.user?.role === "admin" && (
            <button
              onClick={() => navigate("/data")}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800  hover:rounded-3xl transition-all duration-300 ease-in-out
"
            >
              View Data
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800  hover:rounded-3xl transition-all duration-300 ease-in-out
"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// src/components/Dashboard.tsx
import React from "react";
import { useGetDashboardQuery } from "../store/services/dashboardApi";
import { useGetProfileQuery } from "../store/services/authApi";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { data: dashboardData, isLoading: isDashboardLoading } =
    useGetDashboardQuery();
  const { data: profileData, isLoading: isProfileLoading } =
    useGetProfileQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (isDashboardLoading || isProfileLoading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="user-info">
        <h3>User Information</h3>
        {profileData && (
          <div>
            <p>
              <strong>Name:</strong> {profileData.name}
            </p>
            <p>
              <strong>Email:</strong> {profileData.email}
            </p>
            <p>
              <strong>Role:</strong> {profileData.role}
            </p>
          </div>
        )}
      </div>

      <div className="available-actions">
        <h3>Available Actions</h3>
        <ul>
          {dashboardData?.actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>

      <div className="navigation">
        {profileData?.role === "superadmin" && (
          <>
            <button onClick={() => navigate("/users")}>Manage Users</button>
            <button onClick={() => navigate("/data")}>Manage Data</button>
          </>
        )}
        {profileData?.role === "admin" && (
          <button onClick={() => navigate("/data")}>View Data</button>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;

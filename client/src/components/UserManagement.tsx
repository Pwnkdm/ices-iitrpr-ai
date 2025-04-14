// src/components/UserManagement.tsx
import React from "react";
import {
  useGetAllUsersQuery,
  useGetPendingUsersQuery,
  useApproveUserMutation,
  useRevokeUserMutation,
  usePromoteUserMutation,
  useDemoteUserMutation,
} from "../store/services/authApi";

const UserManagement: React.FC = () => {
  const { data: allUsers, isLoading: isAllUsersLoading } =
    useGetAllUsersQuery();
  const { data: pendingUsers, isLoading: isPendingUsersLoading } =
    useGetPendingUsersQuery();

  const [approveUser] = useApproveUserMutation();
  const [revokeUser] = useRevokeUserMutation();
  const [promoteUser] = usePromoteUserMutation();
  const [demoteUser] = useDemoteUserMutation();

  const handleApprove = async (id: string) => {
    try {
      await approveUser(id).unwrap();
    } catch (err) {
      console.error("Failed to approve user:", err);
    }
  };

  const handleRevoke = async (id: string) => {
    try {
      await revokeUser(id).unwrap();
    } catch (err) {
      console.error("Failed to revoke user:", err);
    }
  };

  const handlePromote = async (id: string) => {
    try {
      await promoteUser(id).unwrap();
    } catch (err) {
      console.error("Failed to promote user:", err);
    }
  };

  const handleDemote = async (id: string) => {
    try {
      await demoteUser(id).unwrap();
    } catch (err) {
      console.error("Failed to demote user:", err);
    }
  };

  if (isAllUsersLoading || isPendingUsersLoading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="user-management-container">
      <h2>User Management</h2>

      <div className="pending-users-section">
        <h3>Pending Users</h3>
        {pendingUsers && pendingUsers.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleApprove(user._id)}>
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No pending users found.</p>
        )}
      </div>

      <div className="all-users-section">
        <h3>All Users</h3>
        {allUsers && allUsers.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.role === "admin" && (
                      <button onClick={() => handlePromote(user._id)}>
                        Promote to Superadmin
                      </button>
                    )}
                    {user.role === "superadmin" && (
                      <button onClick={() => handleDemote(user._id)}>
                        Demote to Admin
                      </button>
                    )}
                    {user.role !== "pending" && (
                      <button onClick={() => handleRevoke(user._id)}>
                        Revoke Access
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserManagement;

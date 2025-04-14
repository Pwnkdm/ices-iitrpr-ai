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
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium">
        Loading users...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold text-center mb-8">User Management</h2>

      {/* Pending Users */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Pending Users</h3>
        {pendingUsers && pendingUsers.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pendingUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleApprove(user._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No pending users found.</p>
        )}
      </div>

      {/* All Users */}
      <div>
        <h3 className="text-xl font-semibold mb-4">All Users</h3>
        {allUsers && allUsers.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Role</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4 capitalize">{user.role}</td>
                    <td className="px-6 py-4 space-x-2 space-y-2">
                      {user.role === "admin" && (
                        <button
                          onClick={() => handlePromote(user._id)}
                          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                        >
                          Promote
                        </button>
                      )}
                      {user.role === "superadmin" && (
                        <button
                          onClick={() => handleDemote(user._id)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                        >
                          Demote
                        </button>
                      )}
                      {user.role !== "pending" && (
                        <button
                          onClick={() => handleRevoke(user._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                        >
                          Revoke
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserManagement;

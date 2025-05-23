// src/components/UserManagement.tsx
import React, { useState } from "react";
import {
  useGetAllUsersQuery,
  useGetPendingUsersQuery,
  useApproveUserMutation,
  useRevokeUserMutation,
  usePromoteUserMutation,
  useDemoteUserMutation,
  useDeleteUserMutation,
} from "../store/services/authApi";
import BackButton from "./ui/backButton";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const UserManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pending" | "all">("pending");

  const { data: allUsers, isLoading: isAllUsersLoading } =
    useGetAllUsersQuery();
  const { data: pendingUsers, isLoading: isPendingUsersLoading } =
    useGetPendingUsersQuery();

  const [approveUser, { isLoading: approveLoading }] = useApproveUserMutation();
  const [revokeUser, { isLoading: revokeLoading }] = useRevokeUserMutation();
  const [promoteUser, { isLoading: promoteLoading }] = usePromoteUserMutation();
  const [demoteUser, { isLoading: demoteLoading }] = useDemoteUserMutation();
  const [deleteUser, { isLoading: deleteuserLoading }] =
    useDeleteUserMutation();

  const handleApprove = async (id: string) => {
    try {
      await approveUser(id)
        .unwrap()
        .then((res) => {
          toast.success(res?.message || "User has approved successfully!");
        });
    } catch (err) {
      console.error("Failed to approve user:", err);
      toast.error(err?.data?.message || "Failed to approve user");
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (
      window.confirm("Are you sure you want to delete this user permanantly?")
    ) {
      try {
        await deleteUser(id)
          .unwrap()
          .then((res) => {
            toast.success(res?.message || "User deleted successfully!");
          });
      } catch (err) {
        console.error("Failed to delete user:", err);
        toast.error(err?.data?.message || "Failed to delete user");
      }
    }
  };

  const handleRevoke = async (id: string) => {
    if (window.confirm("Are you sure you want to revoke this user's access?")) {
      try {
        await revokeUser(id)
          .unwrap()
          .then((res) => {
            toast.success(res?.message || "User access rovoked.");
          });
      } catch (err) {
        console.error("Failed to revoke user:", err);
        toast.error(err?.data?.message || "Failed to revoke user");
      }
    }
  };

  const handlePromote = async (id: string) => {
    if (
      confirm("Are you sure you want to pramote this user as a Super Admin?")
    ) {
      try {
        await promoteUser(id)
          .unwrap()
          .then((res) => {
            toast.success(res?.message || "User pramoted as super admin.");
          });
      } catch (err) {
        console.error("Failed to promote user:", err);
        toast.error(err?.data?.message || "Failed to promote user");
      }
    }
  };

  const handleDemote = async (id: string) => {
    if (confirm("Are you sure you want to demote this user to admin?")) {
      try {
        await demoteUser(id)
          .unwrap()
          .then((res) => {
            toast.success(res?.message || "User demoted to admin.");
          });
      } catch (err) {
        console.error("Failed to demote user:", err);
        toast.error(err?.data?.message || "Failed to demote user");
      }
    }
  };

  function disableBtnsForSA() {
    const superAdmins =
      allUsers && allUsers?.filter((user) => user.role === "superadmin");
    return superAdmins.length > 1;
  }

  if (
    isAllUsersLoading ||
    isPendingUsersLoading ||
    approveLoading ||
    revokeLoading ||
    promoteLoading ||
    demoteLoading ||
    deleteuserLoading
  ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-medium flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          Processing...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative border border-neutral-200 flex justify-between items-center p-4 rounded shadow-sm mb-6">
        <BackButton />

        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-sm sm:text-sm md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center">
          User Management
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-3 px-6 font-medium text-sm rounded-t-lg transition ${
            activeTab === "pending"
              ? "bg-white border-l border-t border-r border-gray-200 text-blue-600"
              : "bg-gray-50 text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          Pending Users
          {pendingUsers && pendingUsers.length > 0 && (
            <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {pendingUsers.length}
            </span>
          )}
        </button>
        <button
          className={`py-3 px-6 font-medium text-sm rounded-t-lg transition ${
            activeTab === "all"
              ? "bg-white border-l border-t border-r border-gray-200 text-blue-600"
              : "bg-gray-50 text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Users
          {allUsers && allUsers.length > 0 && (
            <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {allUsers ? allUsers.length : 0}
            </span>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Pending Users Tab */}
        {activeTab === "pending" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Pending User Approvals</h3>
              {pendingUsers && pendingUsers.length > 0 && (
                <span className="text-sm text-gray-500">
                  {pendingUsers.length} user
                  {pendingUsers.length !== 1 ? "s" : ""} waiting for approval
                </span>
              )}
            </div>

            {pendingUsers && pendingUsers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                    <tr>
                      <th className="px-6 py-3 text-left">Name</th>
                      <th className="px-6 py-3 text-left">Email</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pendingUsers.map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{user.name}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4 flex flex-wrap gap-2">
                          <button
                            onClick={() => handleApprove(user._id)}
                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:rounded-3xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm"
                          >
                            <IoCheckmarkDoneSharp className="text-lg" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 hover:rounded-3xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm"
                          >
                            <MdDelete className="text-lg" />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="mb-3 text-gray-400">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-600">
                  No pending users found at this time.
                </p>
              </div>
            )}
          </div>
        )}

        {/* All Users Tab */}
        {activeTab === "all" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">All Users</h3>
              {allUsers && allUsers.length > 0 && (
                <span className="text-sm text-gray-500">
                  {allUsers.length} user{allUsers.length !== 1 ? "s" : ""} in
                  system
                </span>
              )}
            </div>

            {allUsers && allUsers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                    <tr>
                      <th className="px-6 py-3 text-left">Name</th>
                      <th className="px-6 py-3 text-left">Email</th>
                      <th className="px-6 py-3 text-left">Role</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {allUsers.map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{user.name}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.role === "superadmin"
                                ? "bg-purple-100 text-purple-800"
                                : user.role === "admin"
                                ? "bg-blue-100 text-blue-800"
                                : user.role === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-2">
                            {user.role === "admin" && (
                              <button
                                onClick={() => handlePromote(user._id)}
                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 hover:rounded-3xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                Promote
                              </button>
                            )}

                            {user.role === "superadmin" &&
                              disableBtnsForSA() && (
                                <button
                                  onClick={() => handleDemote(user._id)}
                                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 hover:rounded-3xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                >
                                  Demote
                                </button>
                              )}

                            {user.role === "admin" && (
                              <button
                                onClick={() => handleRevoke(user._id)}
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 hover:rounded-3xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                              >
                                Revoke
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="mb-3 text-gray-400">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-600">No users found in the system.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;

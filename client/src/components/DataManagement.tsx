import React, { useState } from "react";
import moment from "moment-timezone";
import {
  useGetAllDataQuery,
  useDeleteDataMutation,
} from "../store/services/dataApi";
import { useGetProfileQuery } from "../store/services/authApi";
import CopyText from "./ui/CopyText";
import BackButton from "./ui/backButton";
import { toast } from "react-toastify";

// Define user type based on API response
interface UserData {
  _id: string;
  username: string;
  email: string;
  phonenumber: string;
  collegeName: string;
  collegeAddress: string;
  city: string;
  pincode: string;
  role: string;
  status?: string;
  createdAt: string;
}

const DataManagement: React.FC = () => {
  const { data: profile } = useGetProfileQuery();
  const { data: allData = [], isLoading, refetch } = useGetAllDataQuery();
  const [deleteData] = useDeleteDataMutation();
  const isSuperadmin = profile?.role === "superadmin";

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = allData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allData.length / itemsPerPage);

  // Search functionality
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredUsers = allData.filter((user: UserData) =>
    Object.values(user).some(
      (value) =>
        value &&
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const currentFilteredUsers = searchTerm
    ? filteredUsers.slice(indexOfFirstItem, indexOfLastItem)
    : currentUsers;

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const pageNumbers: number[] = [];
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteData(id)
          .unwrap()
          .then(() => {
            refetch();
            toast.success("Entry deleted Successfully!");
          });
      } catch (err) {
        console.error("Failed to delete data:", err);
        toast.error(err?.data?.message || "Error while deleting entry:{");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          Loading data...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-2 sm:p-4 md:p-6 rounded h-screen flex flex-col">
      {/* Header */}
      <div className="relative border border-neutral-200 flex justify-between items-center p-2 rounded mb-4 shadow-sm">
        <BackButton />
        <h2 className="text-xl sm:text-2xl font-bold text-center absolute left-1/2 transform -translate-x-1/2">
          User Data Management
        </h2>
        <div className="w-[60px]"></div>
      </div>

      {/* Search and filters */}
      <div className="mb-4 flex flex-col sm:flex-row gap-2 justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-2 top-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="text-sm text-gray-500">
          Showing {currentFilteredUsers.length} of {filteredUsers.length} users
        </div>
      </div>

      {/* Table container with responsive scroll */}
      <div className="overflow-auto flex-grow rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-sky-100 text-sky-800 text-sm sticky top-0 z-10">
            <tr>
              <th className="px-2 py-3 border text-left">#</th>
              <th className="px-2 py-3 border text-left">Username</th>
              <th className="px-2 py-3 border text-left">Email</th>
              <th className="px-2 py-3 border text-left">Phone</th>
              <th className="px-2 py-3 border text-left">College</th>
              <th className="px-2 py-3 border text-left">Address</th>
              <th className="px-2 py-3 border text-left">City</th>
              <th className="px-2 py-3 border text-left">Pincode</th>
              <th className="px-2 py-3 border text-left">Role</th>
              <th className="px-2 py-3 border text-left">Created At</th>
              {isSuperadmin && (
                <th className="px-2 py-3 border text-center">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700 divide-y divide-gray-200">
            {currentFilteredUsers.length > 0 ? (
              currentFilteredUsers.map((user: UserData, idx: number) => (
                <tr key={user._id} className="hover:bg-sky-50 transition">
                  <td className="px-2 py-2 border text-left">
                    {indexOfFirstItem + idx + 1}
                  </td>
                  <td className="px-2 py-2 border text-left font-medium">
                    {user.username}
                  </td>
                  <td className="px-2 py-2 border text-left">
                    <div className="flex items-center gap-1">
                      <span className="truncate max-w-[150px]">
                        {user.email}
                      </span>
                      {user.email && <CopyText text={user.email} />}
                    </div>
                  </td>
                  <td className="px-2 py-2 border text-left">
                    <div className="flex items-center gap-1">
                      {user.phonenumber}
                      {user.phonenumber && <CopyText text={user.phonenumber} />}
                    </div>
                  </td>
                  <td className="px-2 py-2 border text-left max-w-[250px] break-words">
                    {user.collegeName}
                  </td>
                  <td className="px-2 py-2 border text-left max-w-[250px] break-words">
                    {user.collegeAddress}
                  </td>

                  <td className="px-2 py-2 border text-left">{user.city}</td>
                  <td className="px-2 py-2 border text-left">{user.pincode}</td>
                  <td className="px-2 py-2 border text-left">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === "superadmin"
                          ? "bg-red-100 text-red-800"
                          : user.role === "admin"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-2 py-2 border text-left">
                    {moment(user.createdAt)
                      .tz("Asia/Kolkata")
                      .format("DD MMM YYYY, h:mm A")}
                  </td>
                  {isSuperadmin && (
                    <td className="px-2 py-2 border text-center">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-white bg-red-500 hover:bg-red-600 text-xs px-2 py-1 rounded transition"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={isSuperadmin ? 11 : 10}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  {searchTerm
                    ? "No users match your search criteria."
                    : "No users found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center">
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className={`px-2 py-1 text-sm rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-sky-50 hover:border-sky-300"
              }`}
            >
              First
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-2 py-1 text-sm rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-sky-50 hover:border-sky-300"
              }`}
            >
              &laquo;
            </button>

            {getPaginationNumbers().map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 text-sm rounded-md ${
                  currentPage === num
                    ? "bg-sky-500 border border-sky-500 text-white"
                    : "bg-white border border-gray-300 text-gray-600 hover:bg-sky-50 hover:border-sky-300"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-2 py-1 text-sm rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-sky-50 hover:border-sky-300"
              }`}
            >
              &raquo;
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className={`px-2 py-1 text-sm rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-sky-50 hover:border-sky-300"
              }`}
            >
              Last
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataManagement;

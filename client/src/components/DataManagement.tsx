import React, { useState } from "react";
import moment from "moment-timezone";
import {
  useGetAllDataQuery,
  useDeleteDataMutation,
} from "../store/services/dataApi";
import { useGetProfileQuery } from "../store/services/authApi";
import CopyText from "./ui/CopyText"; // Optional, remove if you don't have it

// Define user type based on your API response
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
  const { data: allData = [], isLoading } = useGetAllDataQuery();

  const [deleteData] = useDeleteDataMutation();

  const isSuperadmin = profile?.role === "superadmin";

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = allData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allData.length / itemsPerPage);

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

  const handleDelete = async (id: string) => {
    try {
      await deleteData(id).unwrap();
    } catch (err) {
      console.error("Failed to delete data:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium">
        Loading data...
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-6 bg-gradient-to-br from-sky-50 to-indigo-50 shadow-md rounded mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-br from-sky-600 to-indigo-700 text-transparent bg-clip-text">
        User Data Table
      </h1>

      <div className="overflow-x-auto h-[75vh]">
        <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-sky-100 text-sky-800 text-sm sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 border">#</th>
              <th className="px-4 py-3 border">Username</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Phone</th>
              <th className="px-4 py-3 border">College</th>
              <th className="px-4 py-3 border">Address</th>
              <th className="px-4 py-3 border">City</th>
              <th className="px-4 py-3 border">Pincode</th>
              <th className="px-4 py-3 border">Role</th>
              <th className="px-4 py-3 border">Created At</th>
              {isSuperadmin && <th className="px-4 py-3 border">Actions</th>}
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {currentUsers.map((user: UserData, idx: number) => (
              <tr key={user._id} className="hover:bg-sky-50 transition">
                <td className="px-4 py-2 border text-center">
                  {indexOfFirstItem + idx + 1}
                </td>
                <td className="px-4 py-2 border text-center">
                  {user.username}
                </td>
                <td className="px-4 py-2 border text-start flex h-fit">
                  {user.email}
                  {user.email && <CopyText text={user.email} />}
                </td>
                <td className="px-4 py-2 border text-center">
                  <div className="flex items-center justify-center gap-2">
                    {user.phonenumber}
                    {user.phonenumber && <CopyText text={user.phonenumber} />}
                  </div>
                </td>
                <td className="px-4 py-2 border text-center">
                  {user.collegeName}
                </td>
                <td className="px-4 py-2 border text-center">
                  {user.collegeAddress}
                </td>
                <td className="px-4 py-2 border text-center">{user.city}</td>
                <td className="px-4 py-2 border text-center">{user.pincode}</td>
                <td className="px-4 py-2 border text-center">{user.role}</td>
                <td className="px-4 py-2 border text-center">
                  {moment(user.createdAt)
                    .tz("Asia/Kolkata")
                    .format("DD MMM YYYY, h:mm A")}
                </td>
                {isSuperadmin && (
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <ul className="flex gap-1">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`px-3 py-1 text-sm rounded ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white border border-sky-300 text-sky-600 hover:bg-sky-100"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((num) => (
            <li key={num}>
              <button
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 text-sm rounded ${
                  currentPage === num
                    ? "bg-sky-600 text-white"
                    : "bg-white border border-sky-300 text-sky-600 hover:bg-sky-100"
                }`}
              >
                {num}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={`px-3 py-1 text-sm rounded ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white border border-sky-300 text-sky-600 hover:bg-sky-100"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataManagement;

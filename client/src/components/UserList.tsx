// src/components/UserList.tsx
import React, { useState } from "react";
import moment from "moment-timezone";
import { userData } from "../data/userData";
import CopyText from "./ui/CopyText";

const UserList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the index of the last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = userData.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  // Handle the page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Display range of page numbers
  const pageNumbers: number[] = [];
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(currentPage + 2, totalPages);

  // Adjust the range if the current page is near the beginning or end
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  } else if (currentPage >= totalPages - 2) {
    startPage = Math.max(totalPages - 4, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-fit mx-auto p-6 bg-white shadow-lg rounded-lg mt-25">
      <h1 className="text-3xl font-semibold text-center mb-5 bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent  bg-clip-text">
        User Data Table
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-teal-500 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Sr.No
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Username
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Email
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Phone Number
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                College Name
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border w-72">
                College Address
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                City
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Pincode
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Role
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Status
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-600 border">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, idx) => (
              <tr key={user.id} className="border-b hover:bg-blue-100">
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {idx + 1}
                </td>
                <td className="px-4 py-2 text-center text-sm text-gray-800 border">
                  {user.username}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {user.email}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  <span className="flex items-center">
                    {user.phonenumber}
                    <CopyText text={user.phonenumber} />
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {user.collegeName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {user.collegeAddress}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {user.city}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {user.pincode}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {user.role}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {user.status}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800 border">
                  {moment(user.createdAt)
                    .tz("Asia/Kolkata")
                    .format("MMMM Do YYYY, h:mm:ss a")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <nav>
          <ul className="flex">
            {/* "Previous" Button */}
            <li className="mx-1">
              <button
                onClick={() => paginate(currentPage - 1)}
                className={`px-4 py-2 text-sm rounded border ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500"
                    : "bg-white text-teal-500"
                }`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {pageNumbers.map((number) => (
              <li key={number} className="mx-1">
                <button
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 text-sm rounded border ${
                    currentPage === number
                      ? "bg-teal-500 text-white"
                      : "bg-white text-teal-500"
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}

            {/* "Next" Button */}
            <li className="mx-1">
              <button
                onClick={() => paginate(currentPage + 1)}
                className={`px-4 py-2 text-sm rounded border ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500"
                    : "bg-white text-teal-500"
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserList;

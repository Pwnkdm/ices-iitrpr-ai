import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-lg w-full m-auto mt-32 p-8 rounded-lg shadow-md border-2 border-red-400 bg-white dark:bg-gray-800 text-center">
      <h2 className="text-2xl font-semibold text-red-500 mb-4">
        Unauthorized Access!
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        You do not have permission to access this resource.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition duration-200"
      >
        Return to Dashboard
      </button>
    </div>
  );
};

export default Unauthorized;

import React, { useState } from "react";
import { useRegisterMutation } from "../store/services/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({ name, email, password }).unwrap();
      navigate("/login");
      toast.success("Registration Success!");
    } catch (err: any) {
      console.error("Failed to register:", err);

      const errorMessages = err?.data?.errors;
      const singleMessage =
        err?.data?.message || err?.message || "Failed to register";

      if (Array.isArray(errorMessages)) {
        // Show each error message separately
        errorMessages.forEach((msg) => toast.error(msg));
      } else {
        toast.error(singleMessage);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="h-screen flex justify-center items-center w-full ">
      <div className="max-w-md w-full m-auto flex flex-col items-center justify-center border-2 border-green-800 p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-blue-500">
          Admin Register
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4">
            Registration failed. Please try again.
          </p>
        )}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="form-group mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none  dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none  dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="form-group mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none  dark:bg-gray-700 dark:text-white"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-[70%] right-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              {showPassword ? (
                <FaEyeSlash size={20} /> // Eye Slash Icon for hiding
              ) : (
                <FaEye size={20} /> // Eye Icon for showing
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-200">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="ml-1 font-semibold text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

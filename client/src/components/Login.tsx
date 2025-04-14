// src/components/Login.tsx
import React, { useState } from "react";
import { useLoginMutation } from "../store/services/authApi";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password }).unwrap();
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <div className="max-w-md w-full m-auto flex flex-col items-center justify-center border-2 border-green-800 mt-24 p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-teal-600 to-indigo-400 bg-clip-text text-transparent">
        Admin Login
      </h2>
      {error && (
        <p className="text-red-500 text-sm mb-4 bg-red-100 rounded p-2 w-full text-center">
          Login failed. Please check your credentials.
        </p>
      )}
      <form onSubmit={handleSubmit} className="w-full">
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full 
          bg-blue-300 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

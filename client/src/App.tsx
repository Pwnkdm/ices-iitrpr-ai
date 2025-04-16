import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./components/HomePage.tsx";
import { useEffect } from "react";
import { SignupPage } from "./components/SignupPage.tsx";
import { ToastContainer } from "react-toastify";
import { ToT } from "./components/ToT.tsx";

// Admin components
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import DataManagement from "./components/DataManagement.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import { useGetProfileQuery } from "./store/services/authApi.ts";
import { useSelector } from "react-redux";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 100; // Adjust this value based on the height of your Navbar
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 0); // Small delay to ensure the DOM is updated
    }
  }, [hash]);

  return null;
};

function App() {
  const { data: profile } = useGetProfileQuery();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Router>
      {profile?.role && isAuthenticated ? null : <Navbar />}
      <ToastContainer />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/tot" element={<ToT />} />

        {/* admin routes below  */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected routes for all authenticated users */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Routes for admins and superadmins */}
        <Route
          element={<ProtectedRoute allowedRoles={["admin", "superadmin"]} />}
        >
          <Route path="/data" element={<DataManagement />} />
        </Route>

        {/* Routes only for superadmins */}
        <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>
          <Route path="/users" element={<UserManagement />} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;

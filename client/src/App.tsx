import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

import Navbar from "./components/Navbar.tsx";
import { SignupPage } from "./components/SignupPage.tsx";
import { ToT } from "./components/ToT.tsx";
const HomePage = lazy(() => import("./components/HomePage.tsx"));

// Admin components
const Login = lazy(() => import("./components/Login.tsx"));
const Register = lazy(() => import("./components/Register.tsx"));
const Dashboard = lazy(() => import("./components/Dashboard.tsx"));
const UserManagement = lazy(() => import("./components/UserManagement.tsx"));
const DataManagement = lazy(() => import("./components/DataManagement.tsx"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute.tsx"));
const Unauthorized = lazy(() => import("./components/Unauthorized.tsx"));

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 100;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 0);
    }
  }, [hash]);

  return null;
};

// 👇 AppContent is wrapped inside Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = ["/", "/sign-up", "/tot"].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <ToastContainer />
      <ScrollToHash />

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-xl font-bold text-black">
            <BarLoader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/tot" element={<ToT />} />

          {/* Admin Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route
            element={<ProtectedRoute allowedRoles={["admin", "superadmin"]} />}
          >
            <Route path="/data" element={<DataManagement />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>
            <Route path="/users" element={<UserManagement />} />
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./components/HomePage.tsx";
import { useEffect } from "react";
import { SignupPage } from "./components/SignupPage.tsx";
import { ToastContainer } from "react-toastify";
import { ToT } from "./components/ToT.tsx";
import UserList from "./components/UserList.tsx";

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
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/tot" element={<ToT />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;

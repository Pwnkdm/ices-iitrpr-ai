// src/components/Unauthorized.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-container">
      <h2>Unauthorized Access</h2>
      <p>You do not have permission to access this resource.</p>
      <button onClick={() => navigate("/dashboard")}>
        Return to Dashboard
      </button>
    </div>
  );
};

export default Unauthorized;

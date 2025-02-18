import React, { useState } from "react";
import './singnupPage.css'
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = formData.username ? "" : "Full Name is required";
    tempErrors.email =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Please enter a valid email ID";
    tempErrors.phonenumber =
      /^[0-9]{10}$/.test(formData.phonenumber) ? "" : "Please enter a valid mobile number";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // Reset server error message

    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/user/sign-up', formData);
        console.log('Response:', response.data);
        alert("Signup successful!");

        // Reset form only after successful submission
        setFormData({ username: "", email: "", phonenumber: "" });
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          setServerError(error.response.data.message || "Signup failed. Please try again.");
        } else {
          setServerError("Something went wrong. Please check your internet connection.");
        }
      }
    }
  };

  return (
    <div className="large-header" style={{ backgroundColor: "#f4f4f9", minHeight: "100vh", padding: "0px 0", margin: "auto" }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: "center",
            mt: 11,
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "1px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: "#10a37f" }}>
            Enter the following details to continue
          </Typography>

          {serverError && (
            <Typography color="error" sx={{ mb: 2 }}>
              {serverError}
            </Typography>
          )}

          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
              Full Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name="username"
              variant="outlined"
              value={formData.username}
              placeholder="Enter Full Name"
              onChange={handleChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
              margin="normal"
            />

            <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
              Email Address <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name="email"
              variant="outlined"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              margin="normal"
            />

            <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
              Phone Number <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name="phonenumber"
              placeholder="Enter Your Contact Number"
              variant="outlined"
              value={formData.phonenumber}
              onChange={handleChange}
              error={Boolean(errors.phonenumber)}
              helperText={errors.phonenumber}
              margin="normal"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                backgroundColor: "#10a37f",
                mt: 3,
                height: "60px",
                fontSize: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                '&:hover': {
                  backgroundColor: "rgb(4 84 65)",
                }
              }} 
            >
              SIGN UP
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

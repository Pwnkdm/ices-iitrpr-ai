import React, { useState } from "react";
import './singnupPage.css'
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required";
    tempErrors.email =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Please enter a valid email ID";
    tempErrors.phone =
      /^[0-9]{10}$/.test(formData.phone) ? "" : "Please enter a valid mobile number";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
    setFormData({
      fullName: "",
      email: "",
      phone: "",
    });
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
          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Typography variant="body1"  gutterBottom style={{textAlign:"left"}}>
              Full Name <span style={{ color: "red", }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name="fullName"
              variant="outlined"
              value={formData.fullName}
              placeholder="Enter Full Name"
              onChange={handleChange}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
              margin="normal"
              sx={{
                marginTop:"0px",
                marginBottom: "17px",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "#10a37f" }, // On focus
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "18px", // Placeholder font size
                  fontWeight: "500", // Placeholder font weight
                  fontFamily:"sans-serif"
                },
              }}
              
            />
            <Typography variant="body1"  gutterBottom style={{textAlign:"left"}}>
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
              sx={{
                marginTop:"0px",
                marginBottom: "17px",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "#10a37f" }, // On focus
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "18px", // Placeholder font size
                  fontWeight: "500", // Placeholder font weight
                  fontFamily:"sans-serif"
                },
              }}
            />
            <Typography variant="body1"  gutterBottom style={{textAlign:"left"}}>
              Phone Number <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name="phone"
              placeholder="Enter Your Contact number"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              margin="normal"
              sx={{
                marginTop:"0px",
                marginBottom: "17px",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "#10a37f" }, // On focus
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "18px", // Placeholder font size
                  fontWeight: "500", // Placeholder font weight
                  fontFamily:"sans-serif"
                },
              }}
              
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

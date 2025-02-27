import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Main container that holds both columns
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  padding: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

// Left side - scrollable content
// const ScrollableContent = styled(Box)(({ theme }) => ({
//   height: "calc(100vh - 80px)", // Account for margins/padding
//   overflowY: "auto",
//   padding: theme.spacing(4),
//   backgroundColor: "#f5f5f5",
//   borderRadius: theme.spacing(2),
//   "&::-webkit-scrollbar": {
//     display: "none", // Hide scrollbar for Chrome, Safari, and newer Edge
//   },
//   scrollbarWidth: "none", // Hide scrollbar for Firefox
//   msOverflowStyle: "none",
// }));

// Right side - fixed content
const FixedFormWrapper = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: theme.spacing(10), // Match the marginTop from StyledContainer
  height: "fit-content",
  width: "100%",
}));

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  borderRadius: theme.spacing(2),
}));

const ToT: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phonenumber) {
      newErrors.phonenumber = "Phone Number is required";
    } else if (!/^[0-9]+$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Please enter a valid mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL_TOT}/add`,
          formData
        );

        setSubmitStatus({
          type: "success",
          message: "Registration successful!",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setFormData({
          username: "",
          email: "",
          phonenumber: "",
        });
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: "Registration failed. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <StyledContainer maxWidth="xl">
      {/* <Grid container spacing={4}> */}
      {/* <Grid item xs={12} md={6}>
          <ScrollableContent>
            <Typography variant="h3" gutterBottom textAlign="center" color= "#10a37f" fontWeight={600}>
              TRAINING OF TRAINERS (TOT)/ FACULTY
            </Typography>
           <div>Domain training will be provided by IIT Ropar</div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
          </ScrollableContent>
        </Grid> */}
      <Grid margin={"auto"} width="40%">
        <FixedFormWrapper>
          <FormContainer>
            <Typography
              variant="h4"
              textAlign="center"
              color="#10a37f"
              fontWeight={600}
            >
              ToT Registration
            </Typography>
            {/* <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              color="#10a37f"
              fontWeight={600}
            >
              TRAINING OF TRAINERS (TOT)/ FACULTY
            </Typography> */}

            {submitStatus && (
              <Alert
                severity={submitStatus.type}
                onClose={() => setSubmitStatus(null)}
              >
                {submitStatus.message}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phonenumber"
                type="tel"
                value={formData.phonenumber}
                onChange={handleChange}
                error={!!errors.phonenumber}
                helperText={errors.phonenumber}
                margin="normal"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                disabled={isLoading}
                sx={{ mt: 3 }}
              >
                {isLoading ? <CircularProgress size={24} /> : "Register"}
              </Button>
            </form>
          </FormContainer>
        </FixedFormWrapper>
      </Grid>
      {/* </Grid> */}
    </StyledContainer>
  );
};

export default ToT;

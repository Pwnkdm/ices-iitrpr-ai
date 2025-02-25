import React, { useState } from "react";
import './singnupPage.css';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import axios from "axios";
import { toast } from 'react-toastify';

export const SignupPage = () => {
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    countryCode: "+91"  // Set India as default country code
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = formData.username ? "" : "Full Name is required";
    tempErrors.email =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Please enter a valid email ID";
    tempErrors.phonenumber =
      /^[0-9]+$/.test(formData.phonenumber) ? "" : "Please enter a valid mobile number";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "form");

    if (validate()) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, formData);
        toast.success("Registered Successfully!");

        // Reset form only after successful submission
        setFormData({ username: "", email: "", phonenumber: "", countryCode: "+91" });

         
      } catch (error) {
        console.error('Error:', error);
        if (error?.response) {
          toast.error(error?.response?.data?.message || "Signup failed. Please try again.");
        } else {
          toast.error("Something went wrong. Please check your internet connection.");
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
            padding: { xs: "20px", sm: "40px" },
            borderRadius: "10px",
            boxShadow: "1px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{
            mb: 3,
            color: "#10a37f",
            fontSize: { xs: "1.5rem", sm: "2rem" } // Set font size to 1.5rem for xs (below 400px)
          }}>
            AI-Technocrat Program Registration
          </Typography>

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
              sx={{ marginTop: 0, marginBottom: "20px" }}
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
              sx={{ marginTop: 0, marginBottom: "20px" }}
            />

            <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
              Contact Number <span style={{ color: "red" }}>*</span>
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
              {/* Country Code Selector */}
              <FormControl sx={{ width: "27%", }} margin="normal">
                <InputLabel sx={{ marginTop: "-6px" }}>Country Code</InputLabel>
                <Select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  label="Country Code"
                  sx={{ marginTop: "-8px" }}
                >
                  <MenuItem value="+1">+1 (USA)</MenuItem>
                  <MenuItem value="+44">+44 (UK)</MenuItem>
                  <MenuItem value="+91">+91 (India)</MenuItem>
                  <MenuItem value="+61">+61 (Australia)</MenuItem>
                  <MenuItem value="+81">+81 (Japan)</MenuItem>
                  <MenuItem value="+49">+49 (Germany)</MenuItem>
                  <MenuItem value="+33">+33 (France)</MenuItem>
                  <MenuItem value="+34">+34 (Spain)</MenuItem>
                  <MenuItem value="+39">+39 (Italy)</MenuItem>
                  <MenuItem value="+7">+7 (Russia)</MenuItem>
                  <MenuItem value="+86">+86 (China)</MenuItem>
                  <MenuItem value="+55">+55 (Brazil)</MenuItem>
                  <MenuItem value="+20">+20 (Egypt)</MenuItem>
                  <MenuItem value="+91">+91 (India)</MenuItem>
                  <MenuItem value="+82">+82 (South Korea)</MenuItem>
                  <MenuItem value="+31">+31 (Netherlands)</MenuItem>
                  <MenuItem value="+32">+32 (Belgium)</MenuItem>
                  <MenuItem value="+43">+43 (Austria)</MenuItem>
                  <MenuItem value="+44">+44 (United Kingdom)</MenuItem>
                  <MenuItem value="+53">+53 (Cuba)</MenuItem>
                  <MenuItem value="+52">+52 (Mexico)</MenuItem>
                  <MenuItem value="+55">+55 (Brazil)</MenuItem>
                  <MenuItem value="+56">+56 (Chile)</MenuItem>
                  <MenuItem value="+58">+58 (Venezuela)</MenuItem>
                  <MenuItem value="+60">+60 (Malaysia)</MenuItem>
                  <MenuItem value="+61">+61 (Australia)</MenuItem>
                  <MenuItem value="+62">+62 (Indonesia)</MenuItem>
                  <MenuItem value="+63">+63 (Philippines)</MenuItem>
                  <MenuItem value="+64">+64 (New Zealand)</MenuItem>
                  <MenuItem value="+65">+65 (Singapore)</MenuItem>
                  <MenuItem value="+66">+66 (Thailand)</MenuItem>
                  <MenuItem value="+82">+82 (South Korea)</MenuItem>
                  <MenuItem value="+84">+84 (Vietnam)</MenuItem>
                  <MenuItem value="+91">+91 (India)</MenuItem>
                  <MenuItem value="+92">+92 (Pakistan)</MenuItem>
                  <MenuItem value="+93">+93 (Afghanistan)</MenuItem>
                  <MenuItem value="+94">+94 (Sri Lanka)</MenuItem>
                  <MenuItem value="+95">+95 (Myanmar)</MenuItem>
                  <MenuItem value="+98">+98 (Iran)</MenuItem>
                  <MenuItem value="+99">+99 (Other countries)</MenuItem>

                </Select>
              </FormControl>

              {/* Phone Number */}
              <TextField
                fullWidth
                name="phonenumber"
                placeholder="Enter Your Contact Number"
                variant="outlined"
                value={formData.phonenumber}
                onChange={handleChange}
                error={Boolean(errors.phonenumber)}
                // helperText={errors.phonenumber}
                margin="normal"
                sx={{
                  width: "73%",
                  marginTop: "7px",
                  marginLeft: "1px"


                }}
              />
            </Box>

            {/* Display combined helper text for both country code and phone number */}
            {(errors.phonenumber || errors.countryCode) && (
              <Typography color="error" sx={{ mt: 0, ml: "15px", textAlign: "left", fontSize: "0.75rem" }}>
                {errors.phonenumber || errors.countryCode}
              </Typography>
            )}

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
              REGISTER
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

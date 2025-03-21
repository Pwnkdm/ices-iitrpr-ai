import  { useState } from "react";
import './singnupPage.css';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const ToT = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    countryCode: "+91",  // Set India as default country code
    collegeName: "",
    collegeAddress: "",
    city: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});
  const [openPopup, setOpenPopup] = useState(false); // State to control popup visibility

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = formData.username ? "" : "Full Name is required";
    tempErrors.email =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Please enter a valid email ID";
    tempErrors.phonenumber =
      /^[0-9]+$/.test(formData.phonenumber) ? "" : "Please enter a valid mobile number";
    tempErrors.collegeName = formData.collegeName ? "" : "College/Institution Name is required";
    tempErrors.collegeAddress = formData.collegeAddress ? "" : "College/Institution Address is required";
    tempErrors.city = formData.city ? "" : "City is required";
    tempErrors.pincode = /^[0-9]+$/.test(formData.pincode) ? "" : "Please enter a valid Pincode";
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
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL_TOT}/add`,
          formData
        );
        toast.success("Registered Successfully!");
  
        setOpenPopup(true);
  
        
        setTimeout(() => {
          navigate("/"); 

        }, 3000); 
  

        setFormData({
          username: "",
          email: "",
          phonenumber: "",
          countryCode: "+91",
          collegeName: "",
          collegeAddress: "",
          city: "",
          pincode: ""
        });
  
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

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="large-header" style={{ backgroundColor: "#f4f4f9", minHeight: "100vh", padding: "0px 0", margin: "auto" }}>
      <Container  maxWidth="lg" sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, gap: 3, mt: 5 }}>
      <Box  sx={{ 
      flex: 1, 
      p: 3, 
      mt: 12, 
      backgroundColor: "#f9f9f9", 
      borderRadius: "8px",
      position: "sticky",
      top: "20px",  // Adjust based on need
      height: "fit-content" // Ensures it doesn't take unnecessary space
    }}
      
      
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>Training of Trainers (ToT)/ Faculty</Typography>
        <Typography>- Core Training will be provided by the IIT Ropar & Pedagogical training will be provided by ICES.</Typography>
        <Typography>- ToT certificate will be obtained by ICES after training and assessment.</Typography>
        <Typography>- College/Institution will nominate the faculty member for the ToT program through (SIDH) portal.</Typography>
        <Typography>- The eligible candidate can enrol for this program through college/Institution.</Typography>
        <Typography>- Trainer will provide training, monitoring, and mentoring in physical mode.</Typography>
      </Box>
        <Box
          sx={{
           
            textAlign: "center",
            mt: 8,
            backgroundColor: "#ffffff",
            padding: { xs: "20px", sm: "40px" },
            borderRadius: "10px",
            boxShadow: "1px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)",
            
          }}

          // sx={{
          //   flex: 2,
          //   textAlign: "center",
          //   mt: 8,
          //   backgroundColor: "#ffffff",
          //   padding: { xs: "20px", sm: "40px" },
          //   borderRadius: "10px",
          //   boxShadow: "1px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)",
          //   maxHeight: "80vh", // Restricts height
          //   overflowY: "auto", // Enables scrolling
          // }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{
            mb: 1,
            color: "#10a37f",
            fontSize: { xs: "1.5rem", sm: "2rem" } // Set font size to 1.5rem for xs (below 400px)
          }}>
            ToT Enquiry Form
          </Typography>
          <Typography   sx={{
            mb: 3,
            color: "red",
            fontSize: { xs: "0.75rem", sm: "0.5rem", md:"0.85rem" } // Set font size to 1.5rem for xs (below 400px)
          }}>
            (for currently serving faculty only)
          </Typography>

          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
            {/* Full Name Field */}
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

            {/* Email Address Field */}
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

            {/* Contact Number Field */}
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
                  <MenuItem value="+91">+91 (India)</MenuItem>
                  {/* Add other countries */}
                </Select>
              </FormControl>

              {/* Phone Number Field */}
              <TextField
                fullWidth
                name="phonenumber"
                placeholder="Enter Your Contact Number"
                variant="outlined"
                value={formData.phonenumber}
                onChange={handleChange}
                error={Boolean(errors.phonenumber)}
                margin="normal"
                sx={{
                  width: "73%",
                  marginTop: "7px",
                  marginLeft: "1px"
                }}
              />
            </Box>

            {/* College Name Field */}
            <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
              College/Institution Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name="collegeName"
              variant="outlined"
              value={formData.collegeName}
              placeholder="Enter College/Institution Name"
              onChange={handleChange}
              error={Boolean(errors.collegeName)}
              helperText={errors.collegeName}
              margin="normal"
              sx={{ marginTop: 0, marginBottom: "20px" }}
            />

            {/* College Address Field */}
            <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
              College/Institution Address <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name="collegeAddress"
              variant="outlined"
              value={formData.collegeAddress}
              placeholder="Enter College/Institution Address"
              onChange={handleChange}
              error={Boolean(errors.collegeAddress)}
              helperText={errors.collegeAddress}
              margin="normal"
              sx={{ marginTop: 0, marginBottom: "20px" }}
            />

            {/* City and Pincode Fields */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "50%", paddingRight: "8px" }}>
                <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
                  City <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  name="city"
                  variant="outlined"
                  value={formData.city}
                  placeholder="Enter City"
                  onChange={handleChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city}
                  margin="normal"
                  sx={{
                    marginTop:0
                  }}
                />
              </Box>

              <Box sx={{ width: "50%", paddingLeft: "8px" }}>
                <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
                  Pincode <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  name="pincode"
                  variant="outlined"
                  value={formData.pincode}
                  placeholder="Enter Pincode"
                  onChange={handleChange}
                  error={Boolean(errors.pincode)}
                  helperText={errors.pincode}
                  margin="normal"
                  sx={{
                    marginTop:0
                  }}
                />
              </Box>
            </Box>

            {/* Submit Button */}
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
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Popup dialog */}
      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Thank you !! , We will react out to you shortly.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

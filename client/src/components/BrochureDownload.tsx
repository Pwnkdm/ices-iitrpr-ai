import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  
} from "@mui/material";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";


const BrochureDownload = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    username: "",
    email: "",
    phonenumber: "",
    countryCode: "+91",
    collegeName: "",
    collegeAddress: "",
    city: "",
    pincode: ""
  });
const [errors, setErrors] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

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

    // Role validation
    tempErrors.role = formData.role ? "" : "Please select a role (Student or Faculty)";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "form");
  
    if (validate()) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL_USER}/sign-up`, formData);
        toast.success("Registered Successfully!");
  
        // Close the modal after successful submission
        handleClose();
  
        // Trigger PDF download after a small delay
        setTimeout(() => {
          // Trigger PDF download
          const link = document.createElement('a');
          link.href = '../assets/brochure.pdf'; // Replace with the correct path to your PDF
          link.download = 'brochure.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
  
          // Navigate to homepage after the download starts
        }, 2000); // Adjust delay before triggering download
  
        // Reset form only after successful submission
        setFormData({
          username: "",
          email: "",
          phonenumber: "",
          countryCode: "+91",
          collegeName: "",
          collegeAddress: "",
          city: "",
          pincode: "",
          role: "" // Reset the role after submission
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
  


  return (
    <div className="flex flex-col items-center justify-center  text-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 w-full"
      >
     <Typography >
  <div className="text-2xl italic sm:text-3xl md:text-4xl lg:text-5xl leading-loose space-y-1 font-semibold mb-4 bg-gradient-to-l from-blue-500 to-red-600 bg-clip-text text-transparent">
    <p >READY TO TAKE THE NEXT STEP?</p>
  </div>
  {/* <div className="font-serif text-center font-semibold w-full mx-auto text-base md:text-2xl lg:text-5xl leading-loose space-y-1">
    <p>READY TO TAKE THE NEXT STEP?</p>
  </div> */}
</Typography>





      </motion.div>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >


  
  <CardContent 
    sx={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center" 
    }}
  >
    <Button
      onClick={handleOpen}
      sx={{
        backgroundColor: "#FFA500",
        color: "black",
        fontWeight: "semi-bold",
        paddingX: 6, // Reduced padding for a smaller button
        paddingY: 3.5, // Reduced padding for a smaller button
        borderRadius: "15px", // Rounded corners for the button
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          backgroundColor: "#f1c40f",
          boxShadow: "5px 6px 15px rgba(0, 0, 0, 0.15)",
        },
        transition: "all 0.3s",
        fontSize: "1.1rem", // Slightly bigger text size for the button
        marginTop: 4, // Increased space between text and button
      }}
    >
      DOWNLOAD A BROCHURE
    </Button>
  </CardContent>




      </motion.div>

    

      <Modal open={open} onClose={handleClose}>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl"
          sx={{
            width: {
              xs: "90%",  
              sm: "80%",  
              md: "60%",  
              lg: "50%",  
              xl: "40%"   
            },
            maxWidth: "600px", 
            maxHeight: "70vh", 
            overflowY: "auto" 
          }}
        >
          <Typography variant="h5" className="text-center font-bold mb-6 text-gray-700">
            Fill the Form to Download
          </Typography>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-center mb-3">
              <FormControlLabel
                control={<Checkbox checked={formData.role === "student"} onChange={handleRoleChange} value="student" />}
                label="Student"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.role === "faculty"} onChange={handleRoleChange} value="faculty" />}
                label="Faculty"
              />
            </div>

            <TextField
              label="Full Name"
              name="username"
              variant="outlined"
              fullWidth
              required
              value={formData.username}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: '14px', padding: '12px 16px', height: '50px' }
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  fontSize: '14px',
                },
                height: {
                  xs: '40px', // For smaller screens
                  sm: '45px', // For medium screens
                  md: '50px', // For larger screens
                  lg: '55px'  // For extra large screens
                },
              }}
            />
            <TextField
              label="Email Address"
              name="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: '14px', padding: '12px 16px', height: '50px' }
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  fontSize: '14px',
                },
                height: {
                  xs: '40px', // For smaller screens
                  sm: '45px', // For medium screens
                  md: '50px', // For larger screens
                  lg: '55px'  // For extra large screens
                },
              }}
            />

            {/* Country Code dropdown */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Country Code</InputLabel>
              <Select
                label="Country Code"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                sx={{
                  fontSize: '14px',
                  padding: '12px 16px',
                  height: {
                    xs: '40px', // For smaller screens
                    sm: '45px', // For medium screens
                    md: '50px', // For larger screens
                    lg: '55px'  // For extra large screens
                  },
                }}
              >
                <MenuItem value="+91">+91 (India)</MenuItem>
                <MenuItem value="+1">+1 (USA)</MenuItem>
                <MenuItem value="+44">+44 (UK)</MenuItem>
                <MenuItem value="+61">+61 (Australia)</MenuItem>
                {/* Add more country codes here */}
              </Select>
            </FormControl>

            <TextField
              label="Phone Number"
              name="phonenumber"
              variant="outlined"
              fullWidth
              required
              value={formData.phonenumber}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: '14px', padding: '12px 16px', height: '50px' }
              }}
              sx={{
                mb: 2,
                height: {
                  xs: '40px', // For smaller screens
                  sm: '45px', // For medium screens
                  md: '50px', // For larger screens
                  lg: '55px'  // For extra large screens
                },
              }}
            />

            <TextField
              label="College/Institution Name"
              name="collegeName"
              variant="outlined"
              fullWidth
              required
              value={formData.collegeName}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: '14px', padding: '12px 16px', height: '50px' }
              }}
              sx={{
                mb: 2,
                height: {
                  xs: '40px', // For smaller screens
                  sm: '45px', // For medium screens
                  md: '50px', // For larger screens
                  lg: '55px'  // For extra large screens
                },
              }}
            />
            <TextField
              label="College/Institution Address"
              name="collegeAddress"
              variant="outlined"
              fullWidth
              required
              value={formData.collegeAddress}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: '14px', padding: '12px 16px', height: '50px' }
              }}
              sx={{
                mb: 2,
                height: {
                  xs: '40px', // For smaller screens
                  sm: '45px', // For medium screens
                  md: '50px', // For larger screens
                  lg: '55px'  // For extra large screens
                },
              }}
            />
            <TextField
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              required
              value={formData.city}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: '14px', padding: '12px 16px', height: '50px' }
              }}
              sx={{
                mb: 2,
                height: {
                  xs: '40px', // For smaller screens
                  sm: '45px', // For medium screens
                  md: '50px', // For larger screens
                  lg: '55px'  // For extra large screens
                },
              }}
            />
            <TextField
              label="Pincode"
              name="pincode"
              variant="outlined"
              fullWidth
              required
              value={formData.pincode}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: '14px', padding: '12px 16px', height: '50px' }
              }}
              sx={{
                mb: 3,
                height: {
                  xs: '40px', // For smaller screens
                  sm: '45px', // For medium screens
                  md: '50px', // For larger screens
                  lg: '55px'  // For extra large screens
                },
              }}
            />
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button type="submit" variant="contained" className="bg-[#10a37f] text-white px-6 py-3 rounded-lg w-full">
                DOWNLOAD
              </Button>
            </motion.div>
          </form>
        </Box>
      </Modal>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8"
      >
        <Typography >
  {/* <p className="font-serif italic  text-center font-semibold w-full md:w-4/5 lg:w-3/5 mx-auto sm:text-l md: text-xl lg:text-3xl">
    Be a qualified engineer with Minor in AI from IIT Ropar and get certified by ICES as an AI Technocrat
  </p> */}
</Typography>

      </motion.div>
    </div>
  );
};

export default BrochureDownload;

import { HoverEffect } from "./ui/card-hover-effect";
import { features } from "../data/Features";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function CardHoverEffect() {
  return (
    <div className="max-w-7xl mx-auto px-2">

<motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
       
      >
        <Typography
          variant="h4"
          className="font-extrabold text-center sm:text-9xl  md:text-7xl italic tracking-wide bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent bg-clip-text p-2"
        
        >
          Why Become an AI Technocrat?
        </Typography>
      </motion.div>
      <HoverEffect items={features} />

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="mt-16 w-full max-w-6xl px-4 bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent bg-clip-text"
>
  <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 p-6 sm:p-2  w-full">
    {/* First Box: Who Should Enroll */}
    <Box
      sx={{
        backgroundColor: "#d29684", // Updated light background color
        padding: "30px",
        paddingTop: "50px",
        borderRadius: "16px", // Slightly more rounded corners
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)", // More prominent shadow
        height: "auto",
        width: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        '@media (max-width: 640px)': { // Smaller screen
          padding: "20px",
          textAlign:"center",
        
        },
      }}
      className="hover:scale-105 hover:shadow-xl hover:rotate-1 motion-safe:animate-fade-in cursor-pointer"
    >
      <Typography
        variant="h6"
        sx={{
          color: "linear-gradient(90deg, #4B5563, #1F2937)", // Gradient color for heading text
          fontWeight: "700", // Bold weight for emphasis
          marginBottom: "15px",
          fontSize: "2.75rem",
          backgroundImage: "linear-gradient(299deg, #78889e, #273343)", // Gradient text
          WebkitBackgroundClip: "text",
          '@media (max-width: 640px)': { // Smaller screen font size
            fontSize: "1.75rem",
          },
        }}
      >
        Who Should Enrol?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#FFF", // Lighter gray color for body text
          fontSize: "1.90rem",
          lineHeight: "1.75",
          '@media (max-width: 640px)': { // Smaller screen font size
            fontSize: "1.2rem",
            
          },
        }}
      >
        B-Tech Pursuing Candidates
      </Typography>
    </Box>

    {/* Second Box: Duration and Delivery Format */}
    <Box
      sx={{
        backgroundColor: "#E5E7EB", // Soft gray background for contrast
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)", // Matching box shadow
        height: "auto",
        width: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        '@media (max-width: 640px)': { // Smaller screen padding
          padding: "20px",
          
        },
      }}
      className="hover:scale-105 hover:shadow-xl hover:rotate-1 motion-safe:animate-fade-in cursor-pointer"
    >
      <Typography
        variant="h6"
        sx={{
          color: "linear-gradient(90deg, #4B5563, #1F2937)", // Gradient color for heading text
          fontWeight: "700",
          marginBottom: "15px",
          fontSize: "2rem",
          backgroundImage: "linear-gradient(299deg, #78889e, #273343)", // Gradient text
          WebkitBackgroundClip: "text",
          '@media (max-width: 640px)': { // Smaller screen font size
            fontSize: "1.5rem",
            textAlign:"center",
          },
        }}
      >
        Duration & Delivery Format
      </Typography>

      <ul className="list-none space-y-4">
        <li className="text-lg sm:text-xl md:text-2xl">
          <strong className="text-gray-800">Duration:</strong>{" "}
          <span className="text-gray-600">600 hours spread across a year/semester</span>
        </li>
        <li className="text-lg sm:text-xl md:text-2xl">
          <strong className="text-gray-800">Delivery Format:</strong>{" "}
          <span className="text-gray-600">Blended mode (Online + Offline)</span>
        </li>
      </ul>
    </Box>
  </div>
</motion.div>

    </div>
  );
}

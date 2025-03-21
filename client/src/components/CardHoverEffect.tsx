import { HoverEffect } from "./ui/card-hover-effect";
import { features } from "../data/Features";
import { Box, Typography } from "@mui/material";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={features} />

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6 w-full">
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
            maxWidth: "calc(50% + 2rem)", // Making the first box wider
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="hover:scale-105 hover:shadow-xl hover:rotate-1 motion-safe:animate-fade-in cursor-pointer"
        >
          <Typography
            variant="h6"
            sx={{
              color: "linear-gradient(90deg, #4B5563, #1F2937)", // Gradient color for heading text
              fontWeight: "700", // Bold weight for emphasis
              marginBottom: "15px",
              fontSize: "2.70rem", // Slightly larger text for heading
              backgroundImage: "linear-gradient(299deg, #78889e, #273343)", // Gradient text
              WebkitBackgroundClip: "text",
            }}
          >
            Who Should Enroll?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#FFF", // Lighter gray color for body text
              fontSize: "1.90rem",
              lineHeight: "1.75",
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
            }}
          >
            Duration & Delivery Format
          </Typography>

          <ul className="list-none space-y-4">
            <li className="text-lg sm:text-xl md:text-2xl">
              <strong className="text-gray-800">Duration:</strong>{" "}
              <span className="text-gray-600">
                600 hours spread across a year/semester
              </span>
            </li>
            <li className="text-lg sm:text-xl md:text-2xl">
              <strong className="text-gray-800">Delivery Format:</strong>{" "}
              <span className="text-gray-600">
                Blended mode (Online + Offline)
              </span>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
}

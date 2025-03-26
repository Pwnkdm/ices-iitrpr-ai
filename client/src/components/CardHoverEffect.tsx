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
          className="font-extrabold text-center sm:text-9xl  md:text-7xl italic tracking-wide bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent  bg-clip-text p-2"
        >
          Why Become an AI Technocrat?
        </Typography>
      </motion.div>
      <HoverEffect items={features} />

      <div className="mt-16 w-full max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-2 items-center">
          {/* First Card: Who Should Enroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full sm:w-1/2"
          >
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-4xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-1 border-gray-300">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300/70 to-indigo-400/70 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <h2 className="relative text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-indigo-600 text-transparent bg-clip-text">
                Who Should Enroll?
              </h2>
              <p className="relative text-xl sm:text-2xl text-teal-700">
                B-Tech Pursuing Candidates
              </p>
            </div>
          </motion.div>

          {/* Second Card: Duration & Delivery Format */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full sm:w-1/2 border-gray-400"
          >
            <div className="group relative bg-white p-8 border-1 border-gray-300 rounded-2xl shadow-lg hover:shadow-4xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out ">
              <div className="absolute inset-0 bg-gradient-to-br from-red-300/70 to-purple-400/70 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 "></div>
              <h2 className="relative text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">
                Duration & Delivery Format
              </h2>
              <ul className="relative list-none space-y-4">
                <li className="text-lg sm:text-xl md:text-2xl text-red-700">
                  <span className="font-semibold text-teal-600">
                    Duration :
                  </span>{" "}
                  <span className="text-orange-400">
                    600 hours across a year/semester
                  </span>
                </li>
                <li className="text-lg sm:text-xl md:text-2xl text-red-700">
                  <span className="font-semibold text-teal-600">
                    Delivery Format :
                  </span>{" "}
                  <span className="text-orange-400">
                    Blended mode (Online + Offline)
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

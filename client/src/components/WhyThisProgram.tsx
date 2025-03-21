import { Card, CardContent, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  {
    title: "Transform Industries",
    description:
      "Learn how to apply AI to revolutionize diverse engineering disciplines, from manufacturing and construction to energy and transportation.",
  },
  {
    title: "High-Demand Skills",
    description:
      "The demand for AI professionals is skyrocketing globally. This qualification equips you with the cutting-edge skills needed to thrive in this lucrative and rapidly expanding field.",
  },
  {
    title: "Drive Innovation",
    description:
      "Develop and implement intelligent algorithms and automation systems that enhance efficiency, improve decision-making, and foster innovation.",
  },
  {
    title: "Champion Sustainability",
    description:
      "Contribute to a greener future by developing AI-driven tools that reduce waste, optimize energy consumption, and promote ecological balance.",
  },
  {
    title: "Solve Complex Challenges",
    description:
      "Tackle real-world industry problems using the power of AI, creating impactful solutions that improve operational performance.",
  },
  {
    title: "Future-Proof Your Career",
    description:
      "Gain a competitive edge in the job market by acquiring highly specialized AI skills that are essential for the future of engineering.",
  },
];

const WhyThisProgram = () => {
  return (
    <div className="p-12 bg-white min-h-screen text-gray-900 flex flex-col items-center font-lexend">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <Typography
          variant="h3"
          className="font-extrabold text-5xl md:text-7xl italic tracking-wide bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent bg-clip-text p-2"
        >
          Why Become an AI Technocrat?
        </Typography>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 w-full max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.2 }}
          >
            <Card className="border-t-4 border-red-900 bg-gray-100 text-gray-900 transform hover:scale-105 transition duration-500 ease-in-out h-80 flex items-center">
              <CardContent className="p-6 flex flex-col justify-center">
                <Typography
                  variant="h4"
                  className="font-bold text-2xl md:text-3xl"
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  className="pt-1 mt-4 text-gray-700 text-lg md:text-xl leading-relaxed"
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-6xl px-4 bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent bg-clip-text"
      >
       <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6 w-full">
  {/* First Box: Who Should Enrol */}
  <Box
    sx={{
      backgroundColor: "#d29684", // Updated light background color
      padding: "30px",
      paddingTop:"50px",
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
      Who Should Enrol?
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
};

export default WhyThisProgram;

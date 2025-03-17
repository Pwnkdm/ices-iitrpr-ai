import { Card, CardContent, Typography } from "@mui/material";
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
        <Typography
          variant="h4"
          style={{ fontWeight: "bold" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-center bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent bg-clip-text"
        >
          Who Should Enroll?
        </Typography>
        <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl mt-6 space-y-4 max-w-3xl w-full mx-auto">
          <li className="whitespace-normal">Engineering Candidates</li>
          <li className="whitespace-normal">
            Individuals Interested in AI and its Applications in Engineering
          </li>
          <li className="whitespace-normal">
            <strong>Duration:</strong> 600 hours spread across a year/semester
          </li>
          <li className="whitespace-normal">
            <strong>Delivery Format:</strong> Blended mode (Online + Offline)
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default WhyThisProgram;

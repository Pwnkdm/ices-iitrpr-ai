import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./courseCard";
import SimpleCard from "./SimpleCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeroPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      {/* Animated background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-blue-500/10"
            style={{ top: `${i * 16}%` }}
            animate={{
              x: ["0%", "100%"],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
            IIT-Ropar & ICES
          </h1>
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <h2 className="text-2xl text-blue-300 mb-4">Offers</h2>
            <div className="bg-blue-950/40 border border-blue-500/30 rounded-lg p-4 text-gray-300">
              A Certificate AI (Artificial Intelligence) Technocraft Program
              recognized by NCVET Ministry of Skill Development &
              Entrepreneurship align with NSQF
            </div>
          </motion.div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            "Shaping Tomorrow, With a Futuristic Program for Transforming India"
          </h2>
        </motion.div>

        {/* Main Content Section */}
        <motion.div variants={itemVariants} className="relative">
          {/* Eligibility Flag */}
          <div className="absolute -top-5 left-4 z-20">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-2 rounded-lg shadow-lg"
            >
              <h3 className="text-white font-bold text-xl">Eligibility</h3>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl">
            {/* Eligibility Content */}
            <div className="space-y-6 pt-6">
              {[
                "Completed 2nd Year of 4-year in B-Tech",
                "Completed 3rd year diploma after 10th with 1.5 year relevant stream experience",
                "Previous relevant Qualification of NSQF Level 4.5 with 1.5 year relevant experience",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="flex items-start gap-4 text-gray-200"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    ✓
                  </span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Image Section */}
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8="
                alt="AI Program Visualization"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>

          <div>
            <SimpleCard />
            <CourseCard />
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-bold shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroPage;

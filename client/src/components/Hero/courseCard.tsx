import React from "react";
import { motion } from "framer-motion";

const courseCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl my-10">
      <div className="absolute -top-5 left-4 z-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-2 rounded-lg shadow-lg"
        >
          <h3 className="text-white font-bold text-xl">DUAL CERTIFICATION</h3>
        </motion.div>
      </div>
      {/* Eligibility Content */}
      <div className="space-y-6 pt-6">
        <motion.div
          key={1}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 + 1 * 0.2 }}
          className="flex items-start gap-4 text-gray-200"
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
            ✓
          </span>
          <p>
            Certificate in AI Technocrat worth 20 Credits by ICES (An Awarding
            Body Recognized by NCVET)
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="relative overflow-hidden rounded-xl shadow-2xl group "
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

      {/* Eligibility Content */}
      <div className="space-y-6 pt-6">
        <motion.div
          key={1}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 + 1 * 0.2 }}
          className="flex items-start gap-4 text-gray-200"
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
            ✓
          </span>
          <p>
            Certificate in AI Technocrat worth 20 Credits by ICES (An Awarding
            Body Recognized by NCVET)
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="relative overflow-hidden rounded-xl shadow-2xl group "
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
  );
};

export default courseCard;

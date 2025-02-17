import { motion } from "framer-motion";
import minorinai from "../../assets/minorinai.png";
import ncvet from "../../assets/Ncvet.png";

const courseCard = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800/30 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700/50 shadow-lg my-30">
      <motion.div
        variants={itemVariants}
        className="text-center -mt-12 absolute left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
        >
          DUAL CERTIFICATION
        </motion.button>
      </motion.div>

      {/* Eligibility Content */}

      {/* Image Section */}
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-md group mt-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-3">
          <motion.div
            key={1}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + 1 * 0.2 }}
            className="flex items-start gap-2 text-gray-200"
          >
            <span className="flex-shrink-0 mt-2 ml-3 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              ✓
            </span>
            <p className="text-xs sm:text-sm md:text-xl font-bold text-center py-2">
              Certificate in AI Technocrat worth 20 Credits by ICES, IIT Ropar &
              NCVET
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src={ncvet}
          alt="AI Program Visualization"
          className="w-full h-60 sm:h-70 md:h-100 object-fill transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>

      {/* Eligibility Content */}

      {/* Image Section */}
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-md group mt-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-3">
          <motion.div
            key={1}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + 1 * 0.2 }}
            className="flex items-start gap-2 text-gray-200"
          >
            <span className="flex-shrink-0 mt-3 ml-3 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              ✓
            </span>
            <p className="text-xs sm:text-sm md:text-xl font-bold text-center py-4 mb-2.5 ml-1">
              Certificate in Minor in AI by IIT Ropar
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src={minorinai}
          alt="AI Program Visualization"
          className="w-full h-full sm:h-48 md:h-100 object-fill transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>
    </div>
  );
};

export default courseCard;

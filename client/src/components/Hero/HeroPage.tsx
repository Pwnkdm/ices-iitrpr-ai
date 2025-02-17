import { motion } from "framer-motion";
import CourseCard from "./courseCard";
import { Cover } from "../ui/cover";
import { ColourfulText } from "../ui/colorful-text";
import { FocusCardsDemo } from "./focusCardDemo";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import checkList from "../../assets/checklist_copy.jpeg";
import YtComponent from "./YtComponent";

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
    <div className="min-h-screen ">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
            <ColourfulText text="IIT-Ropar & ICES" />
          </h1>

          <h2 className="text-5xl text-blue-300 mb-4 font-bold ">Offers</h2>
          <motion.div className="flex justify-center items-center text-center">
            <HoverBorderGradient
              containerClassName="border border-blue-500/30 p-4 text-gray-300"
              as="button"
              className="text-white text-xl sm:text-xl md:text-3xl lg:text-4xl dark:text-white block items-center space-x-2 w-full max-w-4xl "
            >
              <span> A Certificate in</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-600">
                AI (Artificial Intelligence) TECHNOCRAT Program
              </span>{" "}
              <span>
                Approved by{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
                  NCVET
                </span>
              </span>{" "}
              <br />
              <span>
                Ministry of Skill Development & Entrepreneurship aligned with
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
                  {" "}
                  NSQF
                </span>
              </span>
            </HoverBorderGradient>
          </motion.div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight">
            "Shaping Tomorrow, With a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
              Futuristic Program
            </span>{" "}
            for Transforming{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
              India
            </span>{" "}
            "
          </h2>
          <h4 className="text-xl sm:text-sm md:text-1xl lg:text-2xl xl:text-4xl font-bold text-white mb-8 leading-tight">
            What's in it for you ?
          </h4>
        </motion.div>

        {/* Main Content Section */}
        <motion.div variants={itemVariants} className="relative">
          {/* Eligibility Flag */}
          <div className="absolute -top-10 left-4 z-20">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              // className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-2 rounded-lg shadow-lg"
              className="px-8 py-3 "
            >
              <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-2xl">
                <Cover>Eligibility</Cover>
              </h3>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl">
            {/* Eligibility Content */}
            <div className="space-y-6 pt-6 m-auto">
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
                  className="flex items-start gap-4 text-gray-200 font-bold"
                >
                  <span className="flex-shrink-0 mt-2 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    ✓
                  </span>
                  <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl">
                    {item}
                  </p>
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
                src={checkList}
                alt="AI Program Visualization"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>

          <div>
            <FocusCardsDemo />
            <CourseCard />
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-800 to-purple-600 rounded-lg text-white font-bold shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <YtComponent />
    </div>
  );
};

export default HeroPage;

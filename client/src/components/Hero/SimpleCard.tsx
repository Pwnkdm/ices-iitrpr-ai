import React from "react";
import { motion } from "framer-motion";

const SimpleCard = () => {
  const cardData = [
    {
      title: "AI Technocrat-20 Credits Equivalent to AICTE",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-blue-500 to-indigo-500", // Stronger gradient for better visibility
    },
    {
      title: "300 Common NOS + 300 Hours Elective NOS of learning",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-green-500 to-yellow-500", // More visible gradient
    },
    {
      title: "IIT-Ropar & Industry Expert Faculty",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-purple-500 to-pink-500", // Visible contrast gradient
    },
    {
      title: "Alumni Status - IIT Ropar",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-blue-500 to-red-500",
    },
    {
      title: "Certified Trainers Trained by IIT-Ropar",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-blue-500 to-red-500",
    },
    {
      title: "Hands-on Experience-AI concepts in six Technical Streams",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-blue-500 to-red-500",
    },
    {
      title: "Convocation at IIT-Ropar",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-blue-500 to-red-500",
    },
    {
      title: "5 Day IIT-Ropar Campus Immersion",
      image_src:
        "https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=",
      gradient: "from-blue-500 to-red-500",
    },
  ];

  return (
    <>
      {cardData &&
        cardData.length &&
        cardData.map((el, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-8 p-8 bg-gray-200/30 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-xl my-5"
          >
            {/* Title Section */}
            <div className="flex flex-col justify-center">
              <motion.h3
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${el.gradient}`}
              >
                {el.title}
              </motion.h3>
            </div>

            {/* Image Section */}
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={el.image_src}
                alt="AI Program Visualization"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>
        ))}
    </>
  );
};

export default SimpleCard;

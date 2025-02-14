import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Mountain Adventure",
    image:
      "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Ocean View",
    image:
      "https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Forest Journey",
    image:
      "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Sunset Paradise",
    image:
      "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
  },
];

const TextToImageAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualSelect, setIsManualSelect] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let interval;
    if (!isManualSelect) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % data.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isManualSelect]);

  const handleClick = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: rect.x + rect.width,
      y: rect.y + rect.height / 2,
    });
    setActiveIndex(index);
    setIsManualSelect(true);
    setTimeout(() => setIsManualSelect(false), 5000);
  };

  return (
    <div className="flex h-screen w-full bg-gray-900 p-8">
      {/* Left side - Headings */}
      <div className="w-1/3 flex flex-col space-y-6 pr-8">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            onClick={(e) => handleClick(index, e)}
            className={`cursor-pointer p-4 rounded-lg ${
              activeIndex === index
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
            whileHover={{
              scale: 1.02,
              backgroundColor: activeIndex === index ? "#3B82F6" : "#374151",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Right side - Image */}
      <div className="w-2/3 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{
              x: -200,
              y: clickPosition.y - window.innerHeight / 2,
              opacity: 0,
              scale: 0.3,
              rotate: -15,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.8,
              },
            }}
            exit={{
              x: 100,
              opacity: 0,
              scale: 0.5,
              rotate: 15,
              transition: {
                duration: 0.3,
              },
            }}
            className="absolute inset-0"
          >
            <img
              src={data[activeIndex].image}
              alt={data[activeIndex].title}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextToImageAnimation;

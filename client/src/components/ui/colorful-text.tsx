import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ColourfulTextProps {
  gradientColors?: string[]; // Optional prop for custom gradient colors
  text: string; // The text to display
}

export const ColourfulText: React.FC<ColourfulTextProps> = ({
  gradientColors,
  text,
}) => {
  // Default gradients if none are provided
  const defaultGradients = [
    ["#A8E6CF", "#FFD3B6"],
    ["#84FAB0", "#8FD3F4"],
    ["#FF6B6B", "#4ECDC4"],
    ["#FF61D2", "#FE9090"],
    ["#4158D0", "#C850C0"],
    ["#4169E1", "#FF69B4", "#FF4646"],
  ];

  const gradients = gradientColors || defaultGradients;

  const [currentGradient, setCurrentGradient] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
      setCount((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [gradients.length]);

  // Convert array of colors to CSS gradient
  const getGradientCSS = (colors) => {
    return `linear-gradient(35deg, ${colors.join(", ")})`;
  };

  return (
    <div className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre tracking-tight bg-clip-text text-transparent py-2"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundImage: getGradientCSS(gradients[currentGradient]),
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default ColourfulText;

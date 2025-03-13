import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SVGClipAnimation = ({ text, className }) => {
  useEffect(() => {
    const animateClipPath = () => {
      const clipPath = document.getElementById("clipPath");
      if (!clipPath) return;
      let pos = -150;
      const interval = setInterval(() => {
        pos += 5;
        clipPath.setAttribute(
          "d",
          `M${pos},0 L${pos + 100},0 L${pos + 80},100 L${pos - 20},100 Z`
        );
        if (pos > 300) pos = -150;
      }, 50);
      return () => clearInterval(interval);
    };
    animateClipPath();
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <clipPath id="clip">
            <motion.path
              id="clipPath"
              initial={{ d: "M-150,0 L-50,0 L-70,100 L-170,100 Z" }}
              animate={{ d: "M300,0 L400,0 L380,100 L280,100 Z" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
            />
          </clipPath>
        </defs>
        <rect width="100%" height="100%" fill="black" clipPath="url(#clip)" />
      </svg>
      <div className="relative z-10 text-white text-center p-4">{text}</div>
    </div>
  );
};

export default SVGClipAnimation;

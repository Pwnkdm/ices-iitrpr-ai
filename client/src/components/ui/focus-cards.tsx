"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      style={{
        border: "2px solid grey",
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-black-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-70 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-scale-down absolute inset-0 w-full h-full" // Ensuring the image covers the whole container
      />

      {/* Animated Title over the image using Framer Motion */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bg-black/50 flex items-center justify-center w-full h-full" // Flexbox to center the text
        initial={{ opacity: 0, y: "100%" }} // Start from bottom (off-screen) and invisible
        animate={{
          opacity: hovered === index ? 1 : 0, // Fade in/out on hover
          y: hovered === index ? 0 : "100%", // Move to the center when hovered
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5, // Smooth transition duration
        }}
      >
        <div className="text-xl md:text-2xl text-center font-medium bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </motion.div>

      {/* Title below the image */}
      <div
        className={cn(
          "absolute bottom-0 w-full bg-black/60 text-gray-300 font-bold text-center mt-80 opacity-100 transition-opacity duration-300",
          hovered === index ? "opacity-0" : "opacity-100"
        )}
      >
        {card.title}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto md:px-8 w-full my-5">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

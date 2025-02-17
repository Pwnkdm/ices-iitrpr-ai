"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    selectedImage,
    setSelectedImage,
  }: {
    card: any;
    index: number;
    selectedImage: string | null; // Tracks the currently selected image for the modal
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>; // Function to update the selected image
  }) => (
    <div
      style={{
        border: "2px solid grey",
      }}
      className={cn(
        "rounded-lg relative bg-black-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-70 w-full transition-all duration-300 ease-out"
      )}
    >
      {/* Image */}
      <img
        src={card.src}
        alt={card.title}
        className="object-scale-down absolute inset-0 w-full h-full cursor-pointer"
        onClick={() => setSelectedImage(card.src)} // Open modal with the clicked image
      />

      {/* Title below the image */}
      <div
        className={cn(
          "absolute bottom-0 w-full bg-black/60 text-gray-300 font-bold text-center mt-80 opacity-100 transition-opacity duration-300"
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State to track the selected image for the modal

  return (
    <>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto md:px-8 w-full my-5">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>

      {/* Modal for Large Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)} // Close modal when clicking outside
        >
          <div
            className="max-w-screen-lg max-h-screen overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
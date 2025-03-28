// src/components/CopyIcon.tsx
import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { TbCopyCheck } from "react-icons/tb";
import { motion } from "framer-motion";

interface CopyIconProps {
  text: string;
  tooltipMessage?: string; // Customizable tooltip message
}

const CopyIcon: React.FC<CopyIconProps> = ({
  text,
  tooltipMessage = "Copied!",
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Function to copy text to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setShowTooltip(true);

      // Hide tooltip after 2 seconds
      setTimeout(() => {
        setShowTooltip(false);
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative flex items-center justify-center space-x-3">
      {/* Copy Icon Button */}
      <motion.div
        onClick={copyToClipboard}
        className={`p-2 rounded-full transition-all duration-300 ease-in-out hover:text-blue-600`}
        whileTap={{ scale: 0.9 }} // Scale down effect on click
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Display Clipboard Icon or Check Icon when copied */}
        {isCopied ? (
          <TbCopyCheck className="h-5 w-5" />
        ) : (
          <MdOutlineContentCopy className="h-5 w-5" />
        )}
      </motion.div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm py-1 px-3 rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tooltipMessage}
        </motion.div>
      )}
    </div>
  );
};

export default CopyIcon;

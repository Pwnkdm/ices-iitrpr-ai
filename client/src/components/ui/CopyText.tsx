// src/components/CopyIcon.tsx
import React, { useState } from "react";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { motion } from "framer-motion";

interface CopyIconProps {
  text: string;
  tooltipMessage?: string;
}

const CopyIcon: React.FC<CopyIconProps> = ({
  text,
  tooltipMessage = "Copied!",
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    // Fixed width and height for the container
    <div className="relative flex items-center justify-center w-8 h-8 border-gray-300 border rounded ml-2">
      {/* Copy Icon Button */}
      <motion.div
        onClick={copyToClipboard}
        className="text-gray-400 transition-all duration-300 ease-in-out hover:text-blue-600"
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isCopied ? (
          <MdCheck className="h-5 w-5" />
        ) : (
          <MdOutlineContentCopy className="h-5 w-5" />
        )}
      </motion.div>

      {/* Tooltip positioned with fixed width */}
      {showTooltip && (
        <motion.div
          className="absolute z-20 whitespace-nowrap bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm py-1 px-3 rounded-md shadow-lg pointer-events-none"
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

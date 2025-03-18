import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const GridComponent = ({ alumni, faculty, immerImage, convocation }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const features = [
    {
      id: 1,
      image: faculty,
      title: "IIT-Ropar & Industry Expert Faculty",
      description:
        "Learn from leading professors and industry professionals with expertise in cutting-edge AI technologies.",
    },
    {
      id: 2,
      image: immerImage,
      title: "5 Day IIT-Ropar Campus Immersion",
      description:
        "Experience the IIT campus environment with a 5-day immersive program featuring hands-on workshops and networking.",
    },
    {
      id: 3,
      image: alumni,
      title: "Alumni Status - IIT Ropar",
      description:
        "Gain prestigious alumni status and access to the extensive IIT Ropar alumni network and resources.",
    },
    {
      id: 4,
      image: convocation,
      title: "IIT Ropar Convocation Ceremony",
      description:
        "Participate in the official convocation ceremony and become part of the prestigious IIT Ropar alumni network with access to exclusive resources and connections.",
    },
  ];

  const openPreview = (image) => {
    setPreviewImage(image);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setPreviewImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl px-2">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="bg-black bg-opacity-60 text-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => openPreview(feature.image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center">
                <p className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Click to enlarge
                </p>
              </div>
              <img
                className="w-full h-48 sm:h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                src={feature.image}
                alt={feature.title}
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 bg-orange-500 text-white p-2 rounded-full"
              onClick={closePreview}
            >
              <X size={24} />
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default GridComponent;

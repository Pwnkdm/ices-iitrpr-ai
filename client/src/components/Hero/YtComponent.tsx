import React from "react";

const YtComponent = () => {
  return (
    <>
      {/* First Section */}
      <div
        style={{
          border: "1px solid grey",
          height: "500px",
          boxSizing: "border-box",
          overflow: "clip",
          padding: "5px",
          borderRadius: "20px",
        }}
        className="h-fit w-[90%] sm:w-[80%] m-auto border-white flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0"
      >
        {/* Left Side - Text Section */}
        <div className="w-full sm:w-[50%] bg-black flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2">
              <div className="text-white">Hear From The</div>
              <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Director Of IIT
              </div>
              <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
                Ropar
              </div>
            </h1>
          </div>
        </div>

        {/* Right Side - Video Section */}
        <div className="w-full sm:w-[50%]">
          <iframe
            className="w-full h-[300px] sm:h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/ClhCYyqRnpM?si=4sQVvCo5kBg1qS5B"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Second Section */}
      <div
        style={{
          border: "1px solid grey",
          height: "500px",
          boxSizing: "border-box",
          overflow: "clip",
          padding: "5px",
          borderRadius: "20px",
          marginTop: "50px",
        }}
        className="h-fit w-[90%] sm:w-[80%] m-auto border-white flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0"
      >
        {/* Left Side - Video Section */}
        <div className="w-full sm:w-[50%]">
          <iframe
            className="w-full h-[300px] sm:h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/ClhCYyqRnpM?si=4sQVvCo5kBg1qS5B"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Text Section */}
        <div className="w-full sm:w-[50%] bg-black flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2">
              <div className="text-white">Hear From The</div>
              <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-900 text-transparent bg-clip-text">
                President Of ICES
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default YtComponent;

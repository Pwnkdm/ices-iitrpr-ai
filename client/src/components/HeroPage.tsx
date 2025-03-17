import bannerimage from "../assets/Design Illustration Portfolio Website in White  Black  Light Classic Minimal Style.png";
import immerImage from "../assets/5_day_immersion.webp";
import convocation from "../assets/Convocation.jpeg";
import faculty from "../assets/faculty.jpeg";
import courseDuration from "../assets/course_duration.png";
import certification from "../assets/winner-white.png";
import AiMl from "../assets/artificial-inelegance.png";
import folder from "../assets/folder.png";
import blogger from "../assets/blogger.png";
import videocam from "../assets/old-video-camera.png";
import awsLogo from "../assets/aws-logo.png";
import GridComponent from "./gridComponent";

const HeroPage = () => {
  return (
    <div className="m-auto w-full">
      {/* Hero Section */}
      <div className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:w-[80%] lg:mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-l from-blue-500 to-red-500 bg-clip-text text-transparent p-2">
          Pursuing B-Tech? It's time to get IIT fortified
        </h1>

        {/* Image container with responsive height */}
        <div className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center my-4">
          <img
            className="w-full h-full object-contain sm:object-contain md:object-fill lg:object-fill"
            src={bannerimage}
            alt="banner"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
          Don't just be an Engineer, Be an AI-powered engineer
        </h2>
      </div>

      {/* Program Details Section */}
      <div className="w-full py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center bg-white">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
            IIT-Ropar & ICE(India)
          </h2>
          <p className="text-lg sm:text-xl font-semibold mt-2">offers</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 mt-2">
            AI TECHNOCRAT PROGRAM
          </h3>
          <p className="text-sm sm:text-md md:text-lg font-medium mt-2 text-center max-w-2xl mx-auto">
            approved by NCVET, MSDE (Ministry of Skill Development &
            Entrepreneurship)
          </p>
        </div>

        {/* Dual Certification Section */}
        <div className="mt-4 w-full max-w-4xl">
          <div className=" bg-gradient-to-br from-teal-300 to-indigo-700  p-4 rounded-lg text-amber-50  shadow-md text-center mx-auto max-w-md">
            <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20">
              <img
                src={certification}
                alt="certification"
                className="h-full w-full object-contain"
              />
            </div>
            <h4 className="text-lg font-bold mt-2">Dual Certification</h4>
            <p className="text-sm mt-2">
              Certificate in AI Technocrat worth 20 Credits by ICES, IIT Ropar &
              NCVET
            </p>
            <p className="text-sm mt-2">
              Certificate in Minor in AI by IIT Ropar
            </p>
          </div>
        </div>

        {/* Feature Images Grid */}
        <GridComponent
          faculty={faculty}
          immerImage={immerImage}
          convocation={convocation}
        />

        {/* Highlights Section */}
        <div className="mt-12 w-full max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16">
                <img
                  className="w-full h-full object-contain"
                  src={AiMl}
                  alt="AI/ML Tools"
                />
              </div>
              <p className="text-xs sm:text-sm text-center mt-2 max-w-[120px]">
                Hands-On Experience with 10+ Industry Tools
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16">
                <img
                  className="w-full h-full object-contain"
                  src={awsLogo}
                  alt="AWS Logo"
                />
              </div>
              <p className="text-xs sm:text-sm text-center mt-2 max-w-[120px]">
                AWS Integration
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16">
                <img
                  className="w-full h-full object-contain"
                  src={blogger}
                  alt="Business Apps"
                />
              </div>
              <p className="text-xs sm:text-sm text-center mt-2 max-w-[120px]">
                Real-world Business Applications
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16">
                <img
                  className="w-full h-full object-contain"
                  src={folder}
                  alt="Pedagogy"
                />
              </div>
              <p className="text-xs sm:text-sm text-center mt-2 max-w-[120px]">
                Immersive Pedagogy
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16">
                <img
                  className="w-full h-full object-contain"
                  src={videocam}
                  alt="Online Sessions"
                />
              </div>
              <p className="text-xs sm:text-sm text-center mt-2 max-w-[120px]">
                100+ Hours Live Online Sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

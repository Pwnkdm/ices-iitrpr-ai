import { Box } from "@mui/material";
import HeroPage from "./HeroPage";
import Curriculum from "./Curriculam";
import FAQs from "./FAQs";
import ContactUs from "./ContactUs";
import Instructors from "./Instructors";
import WhyThisProgram from "./WhyThisProgram";
import BrochureDownload from "./BrochureDownload";
import Coordinator from "./Coordinator";
import { GlowingEffectComp } from "./GlowingEffect";
import { Compare } from "../components/ui/compare";
import wse1 from "../assets/wse-1.png";
import wse2 from "../assets/wse-2.png";

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "200vh",
        padding: 0,
        paddingTop: 10,
        fontFamily: "Lexend",
        //   "linear-gradient(351deg, rgba(175,94,135,1) 0%, rgba(40,40,43,1) 36%)",
      }}
    >
      {/* Why This Course Section */}
      <Box id="overview" sx={{ marginTop: 0, padding: 0, width: "100vw" }}>
        <HeroPage />
      </Box>

      <Box
        id="why_this_course"
        sx={{ marginTop: 0, padding: 0, width: "100vw" }}
      >
        <WhyThisProgram />
        {/* <GlowingEffectComp />

        <div className="m-auto w-[90%] p-4  rounded-3xl  px-4">
          <Compare
            firstImage={wse1}
            secondImage={wse2}
            firstImageClassName="object-fill object-left-top"
            secondImageClassname="object-fill object-left-top"
            className="mx-auto w-full max-w-[200px] h-[250px] sm:max-w-[300px] sm:h-[300px] md:max-w-[500px] md:h-[400px] lg:max-w-[700px] lg:h-[450px] xl:max-w-[900px] xl:h-[500px] 2xl:max-w-[1100px] 2xl:h-[550px]"
            slideMode="hover"
          />
        </div> */}
      </Box>

      {/* Curriculum Section */}
      <Box id="curriculum" sx={{ marginTop: 10, padding: 0 }}>
        <Curriculum />
      </Box>

      {/* Instructor Section */}
      <Box id="instructors" sx={{ marginTop: 10, padding: 0 }}>
        <Instructors />
      </Box>

      {/* Fees Section */}

      <Box id="fees" sx={{ marginTop: 10 }}>
        {/* <FeeStructure /> */}
        <BrochureDownload />
      </Box>

      {/* FAQs Section */}
      <Box id="faqs" sx={{ marginTop: 10, padding: 0 }}>
        <FAQs />
        <Coordinator />
      </Box>

      {/* Event Section */}
      {/* <Box
        id="event"
        sx={{ marginTop: 10, padding: 4, backgroundColor: "#f9f9f9" }}
      >
        <Typography variant="h4">Event</Typography>
        <Typography variant="body1">
          Remove Typography Add Component here
        </Typography>
      </Box> */}

      {/* Contact Section */}
      <Box id="contact" sx={{ padding: 0 }}>
        <ContactUs />
      </Box>
    </Box>
  );
};

export default HomePage;

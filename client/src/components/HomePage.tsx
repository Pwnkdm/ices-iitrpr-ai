import { Box, Typography } from "@mui/material";
import HeroPage from "./Hero/HeroPage";
import Curriculum from "./Curriculam";
import FAQs from "./FAQs";
import { FeeStructure } from "./FeeStructure";
import ContactUs from "./ContactUs";
import Instructors from "./Instructors";

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "200vh",
        padding: 0,
        paddingTop: 10,
        background: "#28282B",
        //background: "linear-gradient(351deg, rgba(175,94,135,1) 0%, rgba(40,40,43,1) 36%)"
      }}
    >
      {/* Why This Course Section */}
      <Box
        id="why-this-course"
        sx={{ marginTop: 0, padding: 0, width: "100vw" }}
      >
        <HeroPage />
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

      <Box id="fees" sx={{ marginTop: 10,  }}>
        <FeeStructure />
      </Box>

      {/* FAQs Section */}
      <Box id="faqs" sx={{ marginTop: 10, padding: 0 }}>
        <FAQs />
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

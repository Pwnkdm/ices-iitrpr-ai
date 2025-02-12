import { Box, Typography } from "@mui/material";
import HeroPage from "./Hero/HeroPage";
import Curriculum from "./Curriculam";
import { FeeStructure } from './FeeStructure'; 

const HomePage = () => {
  return (
    <Box sx={{ minHeight: "200vh", padding: 0, paddingTop: 10 }}>
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

      {/* Fees Section */}

      <Box id="fees" sx={{ marginTop: 10, backgroundColor: '#f9f9f9' }}>
        <FeeStructure />
      </Box>

      {/* FAQs Section */}
      <Box
        id="faqs"
        sx={{ marginTop: 10, padding: 4, backgroundColor: "#f9f9f9" }}
      >
        <Typography variant="h4">FAQs</Typography>
        <Typography variant="body1">
          Remove Typography Add Component here
        </Typography>
      </Box>

      {/* Event Section */}
      <Box
        id="event"
        sx={{ marginTop: 10, padding: 4, backgroundColor: "#f9f9f9" }}
      >
        <Typography variant="h4">Event</Typography>
        <Typography variant="body1">
          Remove Typography Add Component here
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;

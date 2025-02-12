
import { Box, Typography } from '@mui/material';
import { FeeStructure } from './FeeStructure';

const HomePage = () => {
  return (
    <Box sx={{ minHeight: '200vh'}}>
      {/* Curriculum Section */}
      <Box id="curriculum" sx={{ marginTop: 10, padding: 4, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4">Curriculum</Typography>
        <Typography variant="body1">
          Remove Typography Add Component here
        </Typography>
      </Box>

      {/* Why This Course Section */}
      <Box id="why-this-course" sx={{ marginTop: 10, padding: 4, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4">Why This Course?</Typography>
        <Typography variant="body1">
        Remove Typography Add Component here
        </Typography>
      </Box>

      {/* Fees Section */}
      <Box id="fees" sx={{ marginTop: 10, backgroundColor: '#f9f9f9' }}>
        <FeeStructure />
      </Box>

      {/* FAQs Section */}
      <Box id="faqs" sx={{ marginTop: 10, padding: 4, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4">FAQs</Typography>
        <Typography variant="body1">
        Remove Typography Add Component here
        </Typography>
      </Box>

      {/* Event Section */}
      <Box id="event" sx={{ marginTop: 10, padding: 4, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4">Event</Typography>
        <Typography variant="body1">
        Remove Typography Add Component here
        </Typography>
      </Box>

    </Box>
  );
};

export default HomePage;
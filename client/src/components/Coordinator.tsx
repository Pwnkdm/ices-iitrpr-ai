import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  styled,
} from "@mui/material";


const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    cursor: "pointer",
  },
}));
const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // Ensures spacing between top and bottom elements
}));

const facultyData = [
 
  {
    id: 2,
    name: "Prof. Sudarshan Iyengar",
    title: (
      <>
        Head Coordinator (Faculty){"\n"}
        <span style={{ display: "block" }}>IIT Ropar</span>
      </>
    ),
    image:
      "https://cdn.masaischool.com/masai-website/Sudarshan_e73ca6492a.webp",
    video: "",
    isYoutube: false,
  },
  {
    id: 3,
    name: "Er. Munish Kumar Goswami",
    title:  (
      <>
        Dy. Director (Projects), ICE(India){"\n"}
        <span style={{ display: "block" }}>Manager QP/NOS/SME, ICES</span>
      </>
    ),
    image: "https://iceskills.in/wp-content/uploads/2024/07/Er.-Munish-Kumar.jpg",
    video: "",
    isYoutube: false,
  },
  // {
  //   id: 4,
  //   name: "Dr. Emily Williams",
  //   title: "Assistant Professor",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  //   video: "",
  //   isYoutube: false, // This URL needs to be updated to a direct video file
  // },
];



// Helper function to extract YouTube video ID
const getYoutubeId = (url: string) => {
  // Handle different YouTube URL formats
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    return urlParams.get("v");
  }
  return url;
};

const Coordinator = () => {
  
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleSecondContainerCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 10 , }}>
        <h2 className="text-white text-5xl text-center">
          {/* Faculty{" "} */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            Co-ordinators
          </span>
        </h2>

        <Grid container spacing={4} mt={2} alignItems="center" justifyContent="center" 
        
      
        >
          {facultyData.map((faculty) => (
            <Grid item xs={10} sm={10} md={6} lg={4} xl={4} key={faculty.id} >
              <StyledCard>
                <Box
                  sx={{ position: "relative" }}
                  height={300}
                >
                  {/* Just display the poster image in the cards */}
                  <Box
                    component="img"
                    src={faculty.image}
                    alt={faculty.name}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      background:"#eaebed"
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {faculty.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {faculty.title}
                  </Typography>

                 
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

      </Container>

          
    </>
  );
};

export default Coordinator;

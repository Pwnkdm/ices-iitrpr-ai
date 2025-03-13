import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";

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
  // {
  //   id: 1,
  //   name: "Dr. Pushpendra P. Singh",
  //   title: "Dean R&D, IIT Ropar; Project Director, iHub – AWaDH",
  //   image: "/assets/ppssir.png",
  //   video: "https://youtu.be/xIkY_54B1Bs",
  //   isYoutube: true,
  // },
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

  // For second container - toggle video display
  const handleSecondContainerCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <h2 className="text-white text-5xl text-center">
          {/* Faculty{" "} */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            Co-ordinators
          </span>
        </h2>

        <Grid container spacing={4} mt={2} margin={"auto"}>
          {facultyData.map((faculty) => (
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5} key={faculty.id}>
              <StyledCard>
                <Box
                  sx={{ position: "relative", paddingTop: "56.25%" }}
                  height={450}
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
                      objectFit: "cover",
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

                  {/* video play icon in the card to show video in the modal  */}
                  {/* {faculty.video && (
                    <Box
                      display="flex"
                      flexDirection="column-reverse"
                      mt={2}
                      
                    >
                      <Typography
                        onClick={() => handleCardClick(faculty)}
                        textAlign={"center"}
                        color="red"
                      >
                        <SmartDisplayOutlinedIcon sx={{ fontSize: "30px" }} />
                      </Typography>
                    </Box>
                  )} */}
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

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
  styled,
} from "@mui/material";
import { PlayCircleOutline as PlayIcon } from "@mui/icons-material";

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

const leadersData = [
  {
    id: 1,
    name: "Dr. Rajeev Ahuja",
    title: "Director, IIT Ropar",
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/BG_f82a46f6a7.webp",
    desc: "We are committed to offering a well-rounded education that combines academic rigour with practical skills, developing innovative thinkers prepared to tackle new challenges.",
  },
  {
    id: 2,
    name: "Dr. S.L Swamy",
    title: (
      <>
        President, ICES{"\n"}
        <span style={{ display: "block" }}>Chairman, ICE(India)</span>
      </>
    ),
    image: "https://iceskills.in/wp-content/uploads/2024/08/1-236x300.jpg",
    desc: "Advancing Skill Development Excellence:ICES- where community thrive strategic curriculum planning, innovative teaching methods, technology integration and personalized learning experiences.",
    // videoUri:
    //   "https://drive.google.com/file/d/1I-uWwaYNOKOajoxJFW97a7ZLukgK34Zr/view?usp=sharing",
    videoUri:
      "https://drive.google.com/file/d/1vE1Q0CSv4ZadR5aBaazYKWRHfmcDyS6D/view?usp=sharing",
  },
  // {
  //   id: 3,
  //   name: "Ved Mani Tiwari",
  //   title: "CEO, NSDC",
  //   image:
  //     "https://masai-website-images.s3.ap-south-1.amazonaws.com/Ved_Sir_s_picture_f71edf9077.jpg",
  //   desc: "This collaboration shapes a new era of technological excellence by equipping learners with cutting-edge skills, ensuring our workforce maintains global competitiveness.",
  // },
  {
    id: 4,
    name: "Pushpendra P. Singh",
    title: "Project Director iHub-AWaDH & Dean R&D,IIT Ropar",
    image: "/assets/ppssir.png",
    desc: "The AI for Bharat program is going to make essential skills for today's job market accessible. Its flexibility acknowledges each student's learning journey without added burden.",
  },
];

const Instructors = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to convert Google Drive share link to embedded link
  const getEmbedLink = (shareLink) => {
    try {
      const fileId = shareLink.match(/\/d\/([^\/]+)/)[1];
      return `https://drive.google.com/file/d/${fileId}/preview?embedded=true`;
    } catch (error) {
      console.error("Invalid Google Drive link", error);
      return null;
    }
  };

  const handleOpenVideo = (videoUri) => {
    setSelectedVideo(videoUri);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <h2 className="text-white text-3xl sm:text-5xl text-center mt-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            Insights from Industry Leaders and Experts{" "}
          </span>
        </h2>

        <Grid container spacing={4} mt={2}>
          {leadersData.map((ldr) => (
            <Grid item xs={12} sm={6} md={4} key={ldr.id}>
              <StyledCard>
                <Box
                  sx={{ position: "relative", paddingTop: "56.25%" }}
                  height={400}
                >
                  <Box
                    component="img"
                    src={ldr.image}
                    alt={ldr.name}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {ldr.videoUri && (
                    <Box
                      onClick={() => handleOpenVideo(ldr.videoUri)}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.5)",
                        },
                      }}
                    >
                      <PlayIcon
                        sx={{
                          color: "white",
                          fontSize: "4rem",
                          opacity: 0.8,
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                    </Box>
                  )}
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {ldr.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {ldr.title}
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontStyle="italic"
                    fontSize="12px"
                  >
                    "{ldr.desc}"
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Video Modal */}
        <Dialog
          open={!!selectedVideo}
          onClose={handleCloseVideo}
          maxWidth="md"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
          onClick={handleCloseVideo}
        >
          <DialogContent
            sx={{
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedVideo && (
              <div className="relative w-full max-w-screen-xl mx-auto">
                <iframe
                  src={getEmbedLink(selectedVideo)} // Ensure this is a valid embed link (e.g., YouTube or Google Drive)
                  title="Video"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay"
                  loading="lazy"
                  className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] border-4 border-white rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Rest of the component remains the same */}
        <br />
        <h6 className="sm:text-center text-start text-[1rem] sm:text-3xl mt-3 ml-1 sm:ml-10  s">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#08798b] to-[#CF1512]">
            "The world is at the dawn of AI age where the technology is fast
            writing the code for humanity and reshaping our polity, economy,
            security, and society"
          </span>
        </h6>

        <h6 className="text-[0.7rem] flex justify-end sm:text-2xl text-left md:text-3xl lg:text-4xl xl:text-xl text-white mt-6 leading-tight ml-10 italic">
          <span className="bg-clip-text text-left text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            - Honorable PM Shree. Narendra Modi at AI Action Summit, Paris, 2025
          </span>
        </h6>
        <br />
        <br />
      </Container>
    </>
  );
};

export default Instructors;

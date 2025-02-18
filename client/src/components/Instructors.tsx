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

const facultyData = [
  {
    id: 1,
    name: "Dr. Pushpendra P. Singh",
    title: "Dean R&D, IIT Ropar; Project Director, iHub – AWaDH",
    image: "/assets/ppssir.png",
    video: "https://youtu.be/xIkY_54B1Bs",
    isYoutube: true,
  },
  {
    id: 2,
    name: "Prof. Sudarshan Iyengar",
    title: "Head Coordinator, IIT Ropar",
    image:
      "https://cdn.masaischool.com/masai-website/Sudarshan_e73ca6492a.webp",
    video: "https://youtu.be/YHNAkPRwI0k",
    isYoutube: true,
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    video:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    isYoutube: false,
  },
  {
    id: 4,
    name: "Dr. Emily Williams",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    video:
      "https://www.pexels.com/video/a-man-talking-with-hand-gestures-4106314/",
    isYoutube: false, // This URL needs to be updated to a direct video file
  },
];

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
    title: "President, ICES",
    image: "https://iceskills.in/wp-content/uploads/2024/08/1-236x300.jpg",
    desc: "Advancing Skill Development Excellence:ICES- where community thrive strategic curriculum planning, innovative teaching methods, technology integration and personalized learning experiences.",
  },
  {
    id: 3,
    name: "Ved Mani Tiwari",
    title: "CEO, NSDC",
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Ved_Sir_s_picture_f71edf9077.jpg",
    desc: "This collaboration shapes a new era of technological excellence by equipping learners with cutting-edge skills, ensuring our workforce maintains global competitiveness.",
  },
  {
    id: 4,
    name: "Pushpendra P. Singh",
    title: "Project Director iHub-AWaDH & Dean R&D,IIT Ropar",
    image: "/assets/ppssir.png",
    desc: "The AI for Bharat program is going to make essential skills for today's job market accessible. Its flexibility acknowledges each student's learning journey without added burden.",
  },
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

const Instructors = () => {
  const theme = useTheme();
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (faculty: React.SetStateAction<null>) => {
    setSelectedFaculty(faculty);
  };

  const handleClose = () => {
    setSelectedFaculty(null);
  };

  // For second container - toggle video display
  const handleSecondContainerCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <h2 className="text-white text-5xl text-center">
          Faculty{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            Co-ordinators
          </span>
        </h2>

        <Grid container spacing={4} mt={2}>
          {facultyData.map((faculty) => (
            <Grid item xs={12} sm={6} md={3} key={faculty.id}>
              <StyledCard onClick={() => handleCardClick(faculty)}>
                <Box
                  sx={{ position: "relative", paddingTop: "56.25%" }}
                  height={250}
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
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={Boolean(selectedFaculty)}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
        >
          {selectedFaculty && (
            <>
              <DialogTitle>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6" fontWeight={600}>
                    {selectedFaculty.name}
                  </Typography>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Box mb={2}>
                  {selectedFaculty.isYoutube ? (
                    // YouTube embed for YouTube videos
                    <Box
                      sx={{ position: "relative", paddingTop: "56.25%", mb: 2 }}
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYoutubeId(
                          selectedFaculty.video
                        )}`}
                        title={selectedFaculty.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </Box>
                  ) : (
                    // Regular video element for direct video files
                    <video
                      width="100%"
                      controls
                      poster={selectedFaculty.image}
                      style={{
                        borderRadius: "4px",
                        marginBottom: theme.spacing(2),
                      }}
                    >
                      <source src={selectedFaculty.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedFaculty.title}
                  </Typography>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
      <h2 className="text-white text-5xl text-center">
        Something{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
          Informative
        </span>
      </h2>
      <Container maxWidth="lg">
        <Grid container spacing={4} mt={2}>
          {facultyData.map((faculty) => (
            <Grid item xs={12} sm={6} md={3} key={faculty.id}>
              <StyledCard>
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%",
                    borderRight: "none",
                  }}
                  height={250}
                >
                  {faculty.isYoutube ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${getYoutubeId(
                        faculty.video
                      )}`}
                      title={faculty.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    ></iframe>
                  ) : (
                    <video
                      width="100%"
                      height="100%"
                      autoPlay
                      controls
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        objectFit: "cover",
                      }}
                    >
                      <source src={faculty.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </Box>
                {/* <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {faculty.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {faculty.title}
                  </Typography>
                </CardContent> */}
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <h2 className="text-white text-5xl text-center mt-10">
          From the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            Leadership{" "}
          </span>
          Desk
        </h2>

        <Grid container spacing={4} mt={2}>
          {leadersData.map((ldr) => (
            <Grid item xs={12} sm={6} md={3} key={ldr.id}>
              <StyledCard>
                <Box
                  sx={{ position: "relative", paddingTop: "56.25%" }}
                  height={300}
                >
                  {/* Just display the poster image in the cards */}
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
      </Container>
    </>
  );
};

export default Instructors;

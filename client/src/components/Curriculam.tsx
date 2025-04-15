import {
  Box,
  Tab,
  Tabs,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import "./curriculam.css";
import { AutoAwesome } from "@mui/icons-material";

const Curriculum: React.FC = () => {
  const [mainTabValue, setMainTabValue] = React.useState(0);
  const [subTabValue, setSubTabValue] = React.useState(0);

  // Add theme and breakpoint hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Handle main tab change
  const handleMainTabChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setMainTabValue(newValue);
    setSubTabValue(0); // Reset sub-tab when switching main tabs
  };

  // Handle sub-tab change
  const handleSubTabChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setSubTabValue(newValue);
  };

  // Common NOS content
  const commonNosContent = [
    {
      title: "Fundamentals of Artificial Intelligence (AI)",
      points: [
        "Introduction to AI in all Technical Trades",
        "AI Ethics and Impact on society",
        "Aptitude & Mathematics Fundamentals",
        "Data Handling",
      ],
    },
    {
      title: "Python Programming and Data Science for AI",
      points: [
        "Introduction to Python",
        "Data Structures and Algorithms in Python",
        "Object-Oriented Programming (OOP) in Python",
        "Libraries for AI and Data Science",
      ],
    },
    {
      title: "Building Blocks of Artificial Intelligence",
      points: [
        "Fundamentals of Machine Learning (ML)",
        "Basics of Deep Learning",
        "Fundamentals of Natural Language Processing (NLP)",
        "Basics of Computer Vision",
        "Fundamentals of Internet of Things (IoT)",
        "Basics of Robotics",
      ],
    },
  ];

  // Elective NOS content
  const electiveNosContent = [
    {
      title: "Computer Science & IT Engineering",
      points: [
        "Use AI tools/algorithms in Business Intelligence and Data Analysis",
        "Utilize AI tools/algorithms in Software Development Engineering",
        "Utilize AI tools/algorithms in Cybersecurity",
        "Use AI tools/algorithms in IoT and Edge Computing",
        "Use AI tools/algorithms in Cloud Computing",
        "Advancement in AI for CS and IT",
        "Project / OJT",
      ],
    },
    {
      title: "Electronics & Communication Engineering",
      points: [
        "Utilize AI tools/algorithms in Signal Processing",
        "Use AI tools/algorithms in Communication Systems",
        "Use AI tools/algorithms in Embedded Systems and IoT",
        "Use AI tools/algorithms in VLSI Design and Hardware Optimization",
        "Use AI tools /algorithms in Robotics and Autonomous",
        "Utilize AI tools /algorithms in Wireless Communication and Network Optimization",
        "Use AI tools /algorithms in Electronic System Design and Optimization",
        "Advancement in AI for ECE",
        "Project / OJT",
      ],
    },
    {
      title: "Electrical Engineering",
      points: [
        "Use AI tools/algorithms in Power Systems and smart Grids",
        "Use AI tools /algorithms in Control Systems and Automation",
        "Utilize AI tools /algorithms in Signal Processing and Communication Systems",
        "Use  AI tools /algorithms in Electronics and Embedded Systems",
        "Utilize AI tools /algorithms in Renewable Energy Systems",
        "Use AI tools /algorithms Utilize in Robotics and Autonomous",
        "Utilize   AI tools /algorithms for Electric Vehicles",
        "Advancement in AI for Electrical Engineering",
        "Project / OJT",
      ],
    },
    {
      title: "Mechanical Engineering",
      points: [
        "Utilize   AI tools /algorithms in Product Development",
        "Use AI tools/algorithms in Manufacturing and Production Systems",
        "Utilize AI tools/algorithms in Predictive Maintenance and Reliability Engineering",
        "Use AI tools /algorithms in Control Systems and Automation",
        "Utilize AI tools /algorithms in Fluid Mechanics and Thermal Systems",
        "Use AI tools /algorithms in Energy Systems and Sustainability",
        "Utilize AI tools/algorithms in Materials Science and Additive Manufacturing",
        "Advancement in AI for Mechanical Engineering",
        "Project / OJT",
      ],
    },
    {
      title: "Civil Engineering",
      points: [
        "Utilize   AI tools /algorithms in Structural Engineering",
        "Use AI tools /algorithms in Construction Management",
        "Utilize  AI tools /algorithms in Geotechnical Engineering",
        "Use AI tools /algorithms in Transportation Engineering",
        "Utilize AI tools /algorithms in Environmental and Water Resources Engineering",
        "Use AI tools /algorithms in Urban Planning and Smart Cities",
        "Utilize AI tools /algorithms in Construction Automation",
        "Utilize AI tools /algorithms in Sustainable Civil Engineering",
        "Advancement in AI for Civil Engineering",
        "Project / OJT",
      ],
    },
    {
      title: "Metallurgical and Materials Engineering",
      points: [
        "Use  AI tools/algorithms for Materials Design",
        "Utilize Process Optimization and Control in Metallurgy",
        "Use Computational Techniques in Microstructure Analysis",
        "Utilize  AI tools/algorithms for Predictive Modelling of Material Behaviour",
        "Use AI tools/algorithms Utilize    in Smart Manufacturing and Industry 4.0",
        "Utilize AI in Materials Recycling and Circular Economy",
        "Advancement in AI for Metallurgy and Materials Engineering",
        "Project / OJT",
      ],
    },
  ];

  return (
    <Box
      className="wrapper"
      sx={{ width: "100%", color: "#2F4F4F", p: isMobile ? 2 : 4 }}
    >
      {/* Main Title */}
      <Typography
        variant={isMobile ? "h5" : "h4"}
        component="h1"
        gutterBottom
        textAlign={"center"}
        fontWeight={600}
        sx={{
          background: "linear-gradient(to right, #5D3FD3, #FF4433)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fill: "currentColor",
        }}
      >
        What You'll Learn:
      </Typography>
      <br></br>

      {/* Main Tabs */}
      <Box
        sx={{
          width: "100%",
          mb: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={mainTabValue}
          onChange={handleMainTabChange}
          orientation={isMobile ? "vertical" : "horizontal"}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            width: isMobile ? "100%" : "auto",
            borderBottom: "2px solid #ddd",
            mb: 2,
            pb: 2,
            "& .MuiTabs-scrollButtons": {
              color: "#2F4F4F",
              "&.Mui-disabled": {
                opacity: 0.3,
              },
            },
            "& .MuiTabs-flexContainer": {
              gap: 2,
              flexWrap: isMobile ? "nowrap" : "wrap",
              justifyContent: "center",
            },
            "& .MuiTabs-indicator": {
              display: "none",
              outline: "none",
            },
            "& .MuiTab-root": {
              borderRadius: 2,
              border: "1px solid",
              color: "#2F4F4F",
              background: "rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              minWidth: isMobile ? "100%" : "300px",
              minHeight: isMobile ? "auto" : "48px",
              padding: isMobile ? "12px" : "16px 24px",
              margin: isMobile ? "4px 0" : "0 8px",
              fontSize: isMobile ? "0.875rem" : "1rem",

              "&.Mui-selected": {
                color: "#fff", // Color when tab is selected
                background:
                  "linear-gradient(to bottom right, #5eead4, #4338ca)",
                outline: "none",
                fontWeight: "600",
              },
              "&:hover": {
                fontWeight: "700",
                color: "#FFF",
                background:
                  "linear-gradient(to bottom right, #5eead4, #4338ca)",
              },
            },
          }}
        >
          <Tab
            className="bg-gradient-to-r from-teal-600 to-indigo-600 px-8 py-2 rounded-lg shadow-lg"
            label={
              <Typography
                sx={{
                  whiteSpace: "normal",
                  textAlign: "center",
                  lineHeight: 1.3,
                  fontWeight: 600,
                }}
              >
                Common Module (300 Hours)
              </Typography>
            }
          />
          <Tab
            className="bg-gradient-to-r from-teal-600 to-indigo-600 px-8 py-2 rounded-lg shadow-lg"
            label={
              <Typography
                sx={{
                  whiteSpace: "normal",
                  textAlign: "center",
                  lineHeight: 1.3,
                  fontWeight: 600,
                }}
              >
                Core Engineering (300 Hours)
              </Typography>
            }
          />
        </Tabs>
      </Box>

      {/* Sub-Tabs and Content */}
      {mainTabValue === 0 && (
        <Box
          width={isMobile ? "100%" : isTablet ? "100%" : "70%"}
          margin={"auto"}
        >
          {/* Sub-Tabs for Common NOS */}
          <Tabs
            value={subTabValue}
            onChange={handleSubTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            orientation={isMobile ? "vertical" : "horizontal"}
            sx={{
              mb: isMobile ? 2 : 4,
              pb: 2,
              maxWidth: "80%",
              margin: "auto",
              "& .MuiTabs-scrollButtons": {
                color: "white",
                "&.Mui-disabled": {
                  opacity: 0.3,
                },
              },
              "& .MuiTabs-flexContainer": {
                gap: 1,
                flexWrap: isMobile ? "nowrap" : "wrap",
                justifyContent: isMobile ? "flex-start" : "center",
              },
              "& .MuiTabs-indicator": {
                display: "none",
                outline: "none",
              },
              "& .MuiTab-root": {
                color: "#2F4F4F", // Change the default tab text color
                background: "#fff",
                outline: "none",
                border: "1px solid gray",
                fontWeight: "600",
                marginX: "2px",
                minHeight: isMobile ? "auto" : "48px",
                minWidth: isMobile ? "100%" : "200px",
                fontSize: isMobile ? "0.875rem" : "0.9rem",
                padding: "8px 16px",
                whiteSpace: "normal",
                wordBreak: "break-word",

                "&.Mui-selected": {
                  color: "#fff", // Color when tab is selected
                  background:
                    "linear-gradient(to bottom right, #5eead4, #4338ca)",
                  outline: "none",
                  fontWeight: "600",
                },
                "&:hover": {
                  fontWeight: "700",
                  background:
                    "linear-gradient(to bottom right, #5eead4, #4338ca)",
                  color: "#fff",
                },
              },
            }}
          >
            {commonNosContent.map((item, index) => (
              <Tab
                sx={{ borderRadius: 2, textAlign: "center", lineHeight: "1.2" }}
                key={index}
                label={item.title}
                wrapped
              />
            ))}
          </Tabs>

          {/* Sub-Tab Content for Common NOS */}
          <Box
            width="95%"
            margin="auto"
            sx={{
              boxShadow: "4px 10px 50px 0px rgba(24, 28, 31, 0.50)",
              background: "linear-gradient(to bottom right, #5eead4, #4338ca)",
              padding: isMobile ? 2 : 4,
              borderRadius: 2,
            }}
          >
            {/* Title */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background:
                  "linear-gradient(to bottom right, #E5E4E2,  #D3D3D3)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fill: "currentColor",
                textAlign: "center",
                mb: 3,
              }}
            >
              {commonNosContent[subTabValue].title}
            </Typography>

            {/* List of Points */}
            <List>
              {commonNosContent[subTabValue].points.map((point, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      py: 1,
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                      backdropFilter: "blur(10px)",
                      borderRadius: 2,
                    }}
                  >
                    {/* Bullet Icon */}
                    <Box
                      sx={{
                        width: "32px", // Slightly bigger for better visuals
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <AutoAwesome
                        sx={{
                          fontSize: 18,
                          color: "white", // White for contrast
                          filter:
                            "drop-shadow(0px 2px 5px rgba(94, 234, 212, 0.7))", // Glow effect
                        }}
                      />
                    </Box>

                    {/* Point Text */}
                    <ListItemText
                      primary={point}
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: { color: "#fff", fontWeight: "medium" },
                      }}
                    />
                  </ListItem>

                  {/* Divider Between Points */}
                  {index !==
                    commonNosContent[subTabValue].points.length - 1 && (
                    <Divider sx={{ my: 1 }} />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Box>
      )}

      {mainTabValue === 1 && (
        <Box
          width={isMobile ? "100%" : isTablet ? "100%" : "80%"}
          margin={"auto"}
        >
          {/* Sub-Tabs for Elective NOS */}
          <Tabs
            value={subTabValue}
            onChange={handleSubTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            orientation={isMobile ? "vertical" : "horizontal"}
            sx={{
              mb: isMobile ? 2 : 4,
              pb: 2,
              maxWidth: "90%",
              margin: "auto",
              "& .MuiTabs-scrollButtons": {
                color: "white",
                "&.Mui-disabled": {
                  opacity: 0.3,
                },
              },
              "& .MuiTabs-flexContainer": {
                gap: 1,
                flexWrap: isMobile ? "nowrap" : "wrap",
                justifyContent: isMobile ? "flex-start" : "center",
              },
              "& .MuiTabs-indicator": {
                display: "none",
                outline: "none",
              },
              "& .MuiTab-root": {
                color: "#2F4F4F", // Change the default tab text color
                background: "#fff",
                outline: "none",
                border: "1px solid gray",
                fontWeight: "600",
                marginX: "2px",
                minHeight: isMobile ? "auto" : "48px",
                minWidth: isMobile ? "100%" : "200px", // Fixed width for better alignment
                fontSize: isMobile ? "0.875rem" : "0.9rem",
                padding: "8px 16px",
                whiteSpace: "normal", // Allow text to wrap
                wordBreak: "break-word",

                "&.Mui-selected": {
                  color: "#fff", // Color when tab is selected
                  background:
                    "linear-gradient(to bottom right, #5eead4, #4338ca)",
                  outline: "none",
                  fontWeight: "600",
                },
                "&:hover": {
                  fontWeight: "700",
                  color: "#fff",
                  background:
                    "linear-gradient(to bottom right, #5eead4, #4338ca)",
                },
              },
            }}
          >
            {electiveNosContent.map((item, index) => (
              <Tab
                sx={{ borderRadius: 2, textAlign: "center", lineHeight: "1.2" }}
                key={index}
                label={item.title}
                wrapped
              />
            ))}
          </Tabs>

          {/* Sub-Tab Content for Elective NOS */}
          <Box
            width="90%"
            margin="auto"
            sx={{
              boxShadow: "4px 10px 50px 0px rgba(24, 28, 31, 0.50)",
              background: "linear-gradient(to bottom right, #5eead4, #4338ca)",
              padding: isMobile ? 2 : 4,
              borderRadius: 2,
            }}
          >
            {/* Title */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background:
                  "linear-gradient(to bottom right, #E5E4E2,  #D3D3D3)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fill: "currentColor",
                textAlign: "center",
                mb: 3,
              }}
            >
              {electiveNosContent[subTabValue].title}
            </Typography>

            {/* List of Points */}
            <List>
              {electiveNosContent[subTabValue].points.map((point, index) => (
                <React.Fragment key={index}>
                  <ListItem
                  
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      py: 1,
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                      backdropFilter: "blur(10px)",
                      borderRadius: 2,
                    }}
                  >
                    {/* Bullet Icon */}
                    <Box
                      sx={{
                        width: "32px", // Slightly bigger for better visuals
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <AutoAwesome
                        sx={{
                          fontSize: 18,
                          color: "white", // White for contrast
                          filter:
                            "drop-shadow(0px 2px 5px rgba(94, 234, 212, 0.7))", // Glow effect
                        }}
                      />
                    </Box>

                    {/* Point Text */}
                    <ListItemText
                      primary={point}
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: { color: "#fff", fontWeight: "medium" },
                      }}
                    />
                  </ListItem>
                  {/* Divider Between Points */}
                  {index !==
                    electiveNosContent[subTabValue].points.length - 1 && (
                    <Divider sx={{ my: 1 }} />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
          
        </Box>

      )}
      {/* <p  className="bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent font-serif  mt-10  text-center font-semibold w-full md:w-4/5 lg:w-3/5 mx-auto sm:text-l md: text-xl lg:text-3xl ">
    Be a qualified engineer with Minor in AI from IIT Ropar & get certified by ICES as an AI Technocrat

  </p> */}
    </Box>
  );
};

export default Curriculum;

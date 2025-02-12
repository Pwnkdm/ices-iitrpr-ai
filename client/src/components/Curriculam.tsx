import { Box, Tab, Tabs, Typography, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Curriculum: React.FC = () => {
  const [mainTabValue, setMainTabValue] = React.useState(0);
  const [subTabValue, setSubTabValue] = React.useState(0);

  // Handle main tab change
  const handleMainTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setMainTabValue(newValue);
    setSubTabValue(0); // Reset sub-tab when switching main tabs
  };

  // Handle sub-tab change
  const handleSubTabChange = (_event: React.SyntheticEvent, newValue: number) => {
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
      title: "Build Blocks of Artificial Intelligence Specializations",
      points: [
        "Fundamentals of Machine Learning (ML)",
        "Basics of Deep Learning",
        "Fundamentals of Natural Language Processing (NLP)",
        "Basics of Computer Vision",
        "Fundamentals of Internet of Things (IoT)",
        "Basics of Robotics"
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
        "Project / OJT"
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
        "Project / OJT"
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
          "Project / OJT"
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
        "Project / OJT"
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
          "Project / OJT"
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
          "Project / OJT"
        ],
      },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", p: 4 }}>
      {/* Main Title */}
      <Typography variant="h4" component="h1" gutterBottom textAlign={"center"} fontWeight={600}>
        Topics You'll Be Learning
      </Typography>

      {/* Main Tabs */}
      <Tabs
        value={mainTabValue}
        onChange={handleMainTabChange}
        centered
        sx={{ borderBottom: "1px solid #ddd", mb: 4 }}
      >
        <Tab label="Artificial Intelligence - Common NOS (300 Hours)" />
        <Tab label="Elective NOS Subjects (300 Hours)" />
      </Tabs>

      {/* Sub-Tabs and Content */}
      {mainTabValue === 0 && (
        <Box width="70%" margin={"auto"}>
          {/* Sub-Tabs for Common NOS */}
          <Tabs
            value={subTabValue}
            onChange={handleSubTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: "1px solid #ddd", mb: 4 }}
          >
            {commonNosContent.map((item, index) => (
              <Tab key={index} label={item.title} wrapped />
            ))}
          </Tabs>

          {/* Sub-Tab Content for Common NOS */}
          <Box>
            <Typography variant="h5" gutterBottom>
              {commonNosContent[subTabValue].title}
            </Typography>
            <List>
              {commonNosContent[subTabValue].points.map((point, index) => (
                <ListItem key={index}>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}

      {mainTabValue === 1 && (
        <Box width="80%" margin={"auto"}>
          {/* Sub-Tabs for Elective NOS */}
          <Tabs
            value={subTabValue}
            onChange={handleSubTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: "1px solid #ddd", mb: 4 }}
          >
            {electiveNosContent.map((item, index) => (
              <Tab key={index} label={item.title} wrapped />
            ))}
          </Tabs>

          {/* Sub-Tab Content for Elective NOS */}
          <Box>
            <Typography variant="h5" gutterBottom>
              {electiveNosContent[subTabValue].title}
            </Typography>
            <List>
              {electiveNosContent[subTabValue].points.map((point, index) => (
                <ListItem key={index}>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Curriculum;
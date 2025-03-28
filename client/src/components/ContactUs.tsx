import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";

const HeroSection = styled(Box)(({ theme }) => ({
  //background: "linear-gradient(45deg, #1976d2 30%, #2196f3 90%)",
  padding: "80px 0",
  color: "#fff",
  textAlign: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  background: "linear-gradient(to bottom right, #2F4F4F, #000000)",
}));

const ContactUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmailClick = (email: any) => {
    // Separate handler for emails
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  const handlePhoneClick = (phone: any) => {
    // Separate handler for phone
    window.location.href = `tel:${phone}`;
  };

  const handleAddressClick = () => {
    // Separate handler for address
    const addressUrl = "https://maps.app.goo.gl/argfsWpwxvDc2TZm8"; // Or your correct URL
    window.open(addressUrl, "_blank");
  };

  const IconWrapper = styled(Box)(({ theme }) => ({
    fontSize: "2.5rem",
    marginBottom: "1rem",
    // color: "#1976d2",
    // color: "#2F4F4F",
    color: "white",
    display: "inline-flex",
    border: "2px solid",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "50%",
  }));

  const contactCards = [
    {
      icon: <EmailIcon />,
      title: "Email Us",
      description: (
        <>
          Reach out to us on <br />
          {/* <span
            onClick={() => () =>
              handleEmailClick("support_aiforall@iitrpr.ac.in")}
            style={{ cursor: "pointer", }}
          >
            support_aiforall@iitrpr.ac.in
          </span> */}
          <br />
          <span
            onClick={() => () => handleEmailClick("ices@iitrpr.ac.in")}
            style={{ cursor: "pointer" }}
          >
            info@iceskills.in
          </span>
        </>
      ),
    },
    {
      icon: <LocalPhoneIcon />,
      title: "Call Us",
      description: (
        <>
          Mon-Fri from 11am to 8pm
          <br />
          {/* <span
            onClick={() => handlePhoneClick("+918904904840")}
            style={{ cursor: "pointer", }}
          >
            +918904904840
          </span> */}
          <br />
          <span
            onClick={() => handlePhoneClick("+918904904840")}
            style={{ cursor: "pointer" }}
          >
            +919899118475
          </span>
        </>
      ),
    },
    {
      icon: <BusinessIcon />,
      title: "Address",
      description: (
        <>
          Indian Institute of Technology (IIT) , Nangal Road, Rupnagar, Punjab -
          140001
        </>
      ),
      onClick: handleAddressClick,
    },
  ];

  return (
    <Box>
      <HeroSection>
        <Typography
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(to bottom right, #5eead4, #4338ca)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
          variant="h3"
          component="h3"
          // gutterBottom
        >
          For Further Assistance
        </Typography>
      </HeroSection>

      <Container sx={{ pb: 5 }}>
        <Grid container spacing={4}>
          {contactCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard onClick={card.onClick}>
                <CardContent
                  sx={{ flexGrow: 1, textAlign: "center", color: "white" }}
                >
                  <IconWrapper sx={{ color: "#F5F5F5" }}>
                    {card.icon}
                  </IconWrapper>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ color: "#FFA725" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography color="text.white">{card.description}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;

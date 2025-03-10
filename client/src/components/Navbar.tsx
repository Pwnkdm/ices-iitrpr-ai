import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isTablet, "isTablet");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleMenuClose(); // Close the menu after clicking a link
  };

  const buttonStyle = {
    fontSize: { xs: "0.8rem", sm: "0.5rem", md: "0.7rem", lg: "1rem" },
    padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
    whiteSpace: "nowrap",
    background: "none",
    color: "#181818",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "#fa3a00", // Light red-orange hover effect
    },
  };

  const logoStyle = {
    width: isMobile ? "40px" : isTablet ? "50px" : "60px",
    height: isMobile ? "40px" : isTablet ? "50px" : "60px",
    objectFit: "fill",
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        // backgroundColor: "#28282B",
        backgroundColor: "#F6F6F7",
        zIndex: 1000,
        pt: { xs: 0.5, sm: 1 },
        pb: { xs: 0.5, sm: 1 },
      }}
    >
      <Toolbar
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "80%" },
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1, md: 1, lg: 2 },
            cursor: "pointer",
          }}
          onClick={() => handleNavigation("/")}
        >
          <img
            src="/assets/iit_rpr_logo.png"
            alt="iit-logo"
            loading="lazy"
            style={logoStyle}
          />

          <br />
          <img
            src="/assets/logo-2.jpeg"
            alt="iit-logo"
            loading="lazy"
            style={logoStyle}
          />
        </Box>

        {/* Navigation Links (Hidden on Mobile) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            // gap: { md: 1, lg: 2 },
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {[
            { label: "overview", path: "/#overview" },
            { label: "Why this course?", path: "/#Why_this_course" },
            { label: "Curriculum", path: "/#curriculum" },
            { label: "events", path: "/#events" },
            { label: "contact", path: "/#contact" },
            { label: "FAQs", path: "/#faqs" },
          ].map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={buttonStyle}
            >
              {item.label}
            </Button>
          ))}
          <Button
            onClick={() => handleNavigation("/tot")}
            sx={{
              ...buttonStyle,
              color: "black",
              borderRadius: 2,
              p: 1,
            }}
          >
            ToT
          </Button>
          <Button
            onClick={() => handleNavigation("/sign-up")}
            sx={{
              ...buttonStyle,
              background: "Orange",
              color: "black",
              borderRadius: 0,
              p: 1,
            }}
          >
            Enquire Now
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", color: "black" } }}
          />
        </IconButton>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              width: { xs: "200px", sm: "250px" },
              mt: 2,
              "& .MuiMenuItem-root": {
                padding: { xs: 1, sm: 1.5 },
                justifyContent: "center",
              },
            },
          }}
        >
          {[
            { label: "overview", path: "/#overview" },
            { label: "Why this course?", path: "/#Why_this_course" },
            { label: "Curriculum", path: "/#curriculum" },
            { label: "events", path: "/#events" },
            { label: "contact", path: "/#contact" },
            { label: "FAQs", path: "/#faqs" },
          ].map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </MenuItem>
          ))}
          <MenuItem>
            <Button
              onClick={() => handleNavigation("/tot")}
              sx={{
                color: "black",
                width: "100%",
                padding: 1,
                borderRadius: 1,
                background: "none",
              }}
            >
              ToT
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={() => handleNavigation("/sign-up")}
              sx={{
                background: "orange",
                color: "black",
                width: "100%",
                padding: 1,
                borderRadius: 0,
              }}
            >
              Enquire Now
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

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
import { Opacity } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

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
    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
    padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
    whiteSpace: "nowrap",
    background:"none",
    color:"#fff",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "#fa3a00", // Light red-orange hover effect
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#28282B",
        zIndex: 1000,
        pt: { xs: 0.5, sm: 1 },
        pb: { xs: 0.5, sm: 1 },
      }}
    >
      <Toolbar
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%", lg: "80%" },
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
            gap: { xs: 1, sm: 2 },
            cursor: "pointer",
          }}
          onClick={() => handleNavigation("/")}
        >
          <img
            src="/assets/iit_rpr_logo.png"
            alt="iit-logo"
            loading="lazy"
            style={{
              width: isMobile ? "40px" : "60px",
              height: isMobile ? "40px" : "65px",
              objectFit: "cover",
            }}
          />
          {/* <img
            src="/assets/handshake.png"
            alt="handshake"
            loading="lazy"
            style={{
              width: isMobile ? "40px" : "40px",
              height: isMobile ? "40px" : "30px",
              objectFit: "fill",
            }}
          /> */}
          <br />
          <img
            src="/assets/ices_logo.png"
            alt="iit-logo"
            loading="lazy"
            style={{
              width: isMobile ? "40px" : "60px",
              height: isMobile ? "40px" : "60px",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Navigation Links (Hidden on Mobile) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: { md: 1, lg: 2 },
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {[
            { label: "Curriculum", path: "/#curriculum" },
            { label: "Instructors", path: "/#instructors" },
            { label: "Fees", path: "/#fees" },
            { label: "FAQs", path: "/#faqs" },
            { label: "Event", path: "/#event" },
            { label: "Contact", path: "/#contact" },
          ].map((item) => (
            <Button key={item.label} component={Link} to={item.path} sx={buttonStyle}>
              {item.label}
            </Button>
          ))}
          <Button
            onClick={() => handleNavigation("/sign-up")}
            sx={{
              ...buttonStyle,
              background:" linear-gradient(90deg, #D80F20, #1547CE)",
              color: "white",
              borderRadius: 2,
              p: 1,
              // fontWeight: 600,
              "&:hover": {
                color: "#fff",
                transform: "translateY(-2px) scale(1.02)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            Register
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
          <MenuIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
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
            { label: "Curriculum", path: "/#curriculum" },
            { label: "Instructors", path: "/#instructors" },
            { label: "Fees", path: "/#fees" },
            { label: "FAQs", path: "/#faqs" },
            { label: "Event", path: "/#event" },
            { label: "Contact", path: "/#contact" },
          ].map((item) => (
            <MenuItem key={item.label} onClick={() => handleNavigation(item.path)}>
              {item.label}
            </MenuItem>
          ))}
          <MenuItem>
            <Button
              onClick={() => handleNavigation("/sign-up")}
              sx={{
                background:" linear-gradient(90deg, #D80F20, #1547CE)",
                color: "white",
                width: "100%",
                padding: 1,
                borderRadius: 1,
                "&:hover": {
                  color: "#fff",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                },
              }}
            >
              Register
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

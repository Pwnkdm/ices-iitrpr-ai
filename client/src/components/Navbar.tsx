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

  // Custom breakpoint for the problematic range (900px-1132px)
  const isMediumScreen = useMediaQuery(
    "(min-width:900px) and (max-width:1132px)"
  );

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleMenuClose();
  };

  // Enhanced button styling with special handling for medium screens
  const buttonStyle = {
    fontSize: {
      xs: "0.75rem",
      sm: "0.8rem",
      md: isMediumScreen ? "0.7rem" : "0.85rem", // Smaller text in the problem range
      lg: "0.95rem",
    },
    padding: {
      xs: "3px 6px",
      sm: "4px 8px",
      md: isMediumScreen ? "4px 8px" : "6px 12px", // Reduced padding in problem range
      lg: "8px 16px",
    },
    whiteSpace: "nowrap",
    background: "none",
    color: "white",
    transition: "all 0.3s ease-in-out",
    mx: {
      xs: 0.25,
      sm: 0.5,
      md: isMediumScreen ? 0.25 : 0.75, // Reduced margins in problem range
      lg: 1,
    },
    fontWeight: 500,
    "&:hover": {
      color: "#fa3a00",
      background: "rgba(255, 255, 255, 0.05)",
    },
  };

  // More responsive logo styling with special handling
  const logoStyle = {
    width: {
      xs: "32px",
      sm: "40px",
      md: isMediumScreen ? "36px" : "50px", // Smaller logos in problem range
      lg: "60px",
    },
    height: {
      xs: "32px",
      sm: "40px",
      md: isMediumScreen ? "36px" : "50px", // Smaller logos in problem range
      lg: "60px",
    },
    objectFit: "contain",
    transition: "all 0.2s ease-in-out",
  };

  // Navigation menu items
  const navItems = [
    { label: "Overview", path: "/#overview" },
    { label: "Why this course?", path: "/#why_this_course" },
    { label: "Curriculum", path: "/#curriculum" },
    { label: "Events", path: "/#events" },
    { label: "Contact", path: "/#contact" },
    { label: "FAQs", path: "/#faqs" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        // backgroundColor: "#28282B",
        backgroundColor: "black",
        zIndex: theme.zIndex.appBar,
        pt: { xs: 0.5, sm: 0.75, md: 1 },
        pb: { xs: 0.5, sm: 0.75, md: 1 },
        boxShadow: 3,
      }}
    >
      <Toolbar
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: isMediumScreen ? "98%" : "90%", // Wider toolbar in problem range
            lg: "85%",
          },
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          minHeight: { xs: "56px", sm: "64px", md: "70px" },
          px: {
            xs: 0.5,
            sm: 1,
            md: isMediumScreen ? 0.5 : 2, // Less padding in problem range
          },
        }}
        disableGutters
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 0.75,
              sm: 1,
              md: isMediumScreen ? 0.75 : 1.5, // Less gap in problem range
              lg: 2,
            },
            cursor: "pointer",
            flexShrink: 0,
          }}
          onClick={() => handleNavigation("/")}
        >
          <Box
            component="img"
            src="/assets/iit_rpr_logo.png"
            alt="IIT logo"
            loading="lazy"
            sx={logoStyle}
          />
          <Box
            component="img"
            src="/assets/logo-ICE-2.png"
            alt="Secondary logo"
            loading="lazy"
            sx={logoStyle}
          />
          <Box
            component="img"
            src="/assets/ices_logo.png"
            alt="ICES logo"
            loading="lazy"
            sx={logoStyle}
          />
        </Box>

        {/* Navigation Links (Hidden on Mobile) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "flex-end",
            flexGrow: 1,
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {navItems.map((item) => (
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
              ml: {
                xs: 0.5,
                sm: 1,
                md: isMediumScreen ? 0.5 : 1.5, // Less margin in problem range
              },
              fontWeight: 600,
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
              fontWeight: 600,
              ml: {
                xs: 0.5,
                sm: 1,
                md: isMediumScreen ? 0.5 : 1.5, // Less margin in problem range
              },
              px: {
                xs: 1.5,
                sm: 2,
                md: isMediumScreen ? 1.5 : 2.5, // Less padding in problem range
              },
              "&:hover": {
                background: "#e67e00",
                color: "black",
                transform: "translateY(-2px)",
              },
            }}
          >
            Enquire Now
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { md: "none" },
            ml: 1,
          }}
          onClick={handleMenuOpen}
        >
          <MenuIcon
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" }, color: "white" }}
          />
        </IconButton>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              width: { xs: "200px", sm: "250px" },
              mt: 1,
              backgroundColor: "#333",
              color: "white",
              "& .MuiMenuItem-root": {
                padding: { xs: 1.25, sm: 1.5 },
                justifyContent: "center",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
                typography: {
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  fontWeight: 500,
                },
              },
            },
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </MenuItem>
          ))}
          <MenuItem onClick={() => handleNavigation("/tot")}>ToT</MenuItem>
          <MenuItem sx={{ border: "none !important" }}>
            <Button
              onClick={() => handleNavigation("/sign-up")}
              sx={{
                background: "orange",
                color: "black",
                width: "100%",
                py: 1,
                px: 2,
                borderRadius: 0,
                fontWeight: 600,
                "&:hover": {
                  background: "#e67e00",
                },
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

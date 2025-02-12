import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home route
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#000000",zIndex: 1000, pt: 1, pb: 1 }}>
      <Toolbar
        sx={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* Logo or Brand Name */}
        <Box
         sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingLeft: 2,
          cursor: "pointer",
        }}
        onClick={handleLogoClick} 
        >
          <img
            src={`https://cdn.masaischool.com/masai-website/iit_ropar_log_2b73a85a72.webp`}
            alt="iit-logo"
            width={60}
            height={60}
            loading="lazy"
          />
          <img
            src={`https://iceskills.in/wp-content/themes/ices/images/ices.png`}
            alt="iit-logo"
            width={60}
            height={60}
            loading="lazy"
          />
        </Box>
        {/* Navigation Links for Larger Screens */}
        <Box
          sx={{ display: { xs: "none", md: "flex" }, gap: 3, paddingRight: 2 }}
        >
          <Button component={Link} to="/#curriculum" className="nav-btn">Curriculum</Button>
          <Button component={Link} to="/#why-this-course" className="nav-btn">Why This Course</Button>
          <Button component={Link} to="/#fees" className="nav-btn">FEES</Button>
          <Button component={Link} to="/#faqs" className="nav-btn">FAQs</Button>
          <Button component={Link} to="/#event" className="nav-btn">Event</Button>
          <Button
            component={Link}
            to="/#register-for-test"
            sx={{
              backgroundColor: "white",
              color: "#000000",
              borderRadius: 2,
              p: 1,
              fontWeight: 600,
            }}
          >
            Register for Test
          </Button>
        </Box>

        {/* Hamburger Menu Icon for Smaller Screens */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu for Smaller Screens */}
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
        >
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#curriculum" sx={{ color: 'black' }}>CURRICULUM</Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#why-this-course" sx={{ color: 'black' }}>WHY THIS COURSE</Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#fees" sx={{ color: 'black' }}>FEES</Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#faqs" sx={{ color: 'black' }}>FAQs</Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#event" sx={{ color: 'black' }}>EVENT</Button>
          </MenuItem>
          <MenuItem>
            <Button component={Link} to="/#register-for-test" sx={{ backgroundColor: "black", color: "white" }}>
              REGISTER FOR TEST
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

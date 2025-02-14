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
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#28282B", zIndex: 1000, pt: 1, pb: 1 }}
    >
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
            src="/assets/iit_rpr_logo.png"
            alt="iit-logo"
            width={60}
            height={60}
            loading="lazy"
            style={{
              // borderRadius: "10%",
              objectFit: "cover",
            }}
          />
          <img
            src="/assets/handshake.png"
            alt="iit-logo"
            width={60}
            height={60}
            loading="lazy"
            style={{
              // borderRadius: "10%",
              objectFit: "fill",
              color: "white"
            }}
          />
          <img
            src="/assets/ices_logo.png"
            alt="iit-logo"
            width={60}
            height={60}
            loading="lazy"
            style={{
              // borderRadius: "10%",
              objectFit: "cover",
            }}
          />
        </Box>
        {/* Navigation Links for Larger Screens */}
        <Box
          sx={{ display: { xs: "none", md: "flex" }, gap: 3, paddingRight: 2 }}
        >
          <Button component={Link} to="/#curriculum" className="nav-btn">
            Curriculum
          </Button>
          <Button component={Link} to="/#why-this-course" className="nav-btn">
            Why This Course
          </Button>
          <Button component={Link} to="/#fees" className="nav-btn">
            FEES
          </Button>
          <Button component={Link} to="/#faqs" className="nav-btn">
            FAQs
          </Button>
          <Button component={Link} to="/#event" className="nav-btn">
            Event
          </Button>
          <Button
            component={Link}
            to="/#register-for-test"
            sx={{
              background:
                "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
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
            <Button component={Link} to="/#curriculum" sx={{ color: "black" }}>
              CURRICULUM
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              component={Link}
              to="/#why-this-course"
              sx={{ color: "black" }}
            >
              WHY THIS COURSE
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#fees" sx={{ color: "black" }}>
              FEES
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#faqs" sx={{ color: "black" }}>
              FAQs
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button component={Link} to="/#event" sx={{ color: "black" }}>
              EVENT
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              component={Link}
              to="/#register-for-test"
              sx={{
                background:
                  "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                color: "white",
              }}
            >
              REGISTER FOR TEST
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

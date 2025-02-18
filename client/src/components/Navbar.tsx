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
  const handleSignUpPage = () => {
    navigate("/sign-up"); // Navigate to the home route
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  const buttonStyle = {
    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
    padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
    whiteSpace: "nowrap",
    "&:hover": {
      transform: "translateY(-2px)",
      transition: "transform 0.2s ease-in-out",
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
        {/* Logo or Brand Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            cursor: "pointer",
          }}
          onClick={handleLogoClick}
        >
          <img
            src="/assets/iit_rpr_logo.png"
            alt="iit-logo"
            loading="lazy"
            style={{
              width: isMobile && isTablet ? "40px" : "60px",
              height: isMobile && isTablet ? "40px" : "65px",
              objectFit: "cover",
            }}
          />
          <img
            src="/assets/handshake.png"
            alt="handshake"
            loading="lazy"
            style={{
              width: isMobile && isTablet? "40px" : "40px",
              height: isMobile && isTablet ? "40px" : "30px",
              objectFit: "fill",
            }}
          />
          <img
            src="/assets/ices_logo.png"
            alt="iit-logo"
            loading="lazy"
            style={{
              width: isMobile && isTablet ? "40px" : "60px",
              height: isMobile && isTablet ? "40px" : "60px",
              objectFit: "cover",
            }}
          />
        </Box>
        {/* Navigation Links for Larger Screens */}
        <Box
          sx={{
            display: { xs: "none",sm:"none", md: "none", lg:"flex"},
            gap: { md: 1, lg: 2 },
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <Button
            component={Link}
            to="/#curriculum"
            className="nav-btn"
            sx={buttonStyle}
          >
            Curriculum
          </Button>
          <Button
            component={Link}
            to="/#instructors"
            className="nav-btn"
            sx={buttonStyle}
          >
            Instructors
          </Button>
          {/* <Button
            component={Link}
            to="/#why-this-course"
            className="nav-btn"
            sx={buttonStyle}
          >
            Why This Course
          </Button> */}
          <Button
            component={Link}
            to="/#fees"
            className="nav-btn"
            sx={buttonStyle}
          >
            FEES
          </Button>
          <Button
            component={Link}
            to="/#faqs"
            className="nav-btn"
            sx={buttonStyle}
          >
            FAQs
          </Button>
          <Button
            component={Link}
            to="/#event"
            className="nav-btn"
            sx={buttonStyle}
          >
            Event
          </Button>
          <Button
            component={Link}
            to="/#contact"
            className="nav-btn"
            sx={buttonStyle}
          >
            Contact
          </Button>
          <Button
             onClick={handleSignUpPage}
            // component={Link}
            // to="/#register-for-test"
            sx={{
              ...buttonStyle,
              background:
                "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
              color: "#000000",
              borderRadius: 2,
              p: 1,
              fontWeight: 600,
              "&:hover": {
                transform: "translateY(-2px) scale(1.02)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            Register
          </Button>
        </Box>

        {/* Hamburger Menu Icon for Smaller Screens */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "flex", md: "flex",lg:"none" },
            padding: { xs: 1, sm: 1.5 },
          }}
          onClick={handleMenuOpen}
        >
          <MenuIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
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
          PaperProps={{
            sx: {
              width: { xs: '200px', sm: '250px' },
              mt: 2,
              '& .MuiMenuItem-root': {
                padding: { xs: 1, sm: 1.5 },
                justifyContent: 'center'
              }
            }
          }}
        >
          {[
            { label: "CURRICULUM", path: "/#curriculum" },
            { label: "INSTRUCTORS", path: "/#instructors" },
            // { label: "WHY THIS COURSE", path: "/#why-this-course" },
            { label: "FEES", path: "/#fees" },
            { label: "FAQs", path: "/#faqs" },
            { label: "EVENT", path: "/#event" },
            { label: "CONTACT", path: "/#contact" },
          ].map((item) => (
            <MenuItem 
              key={item.label} 
              onClick={handleMenuClose}
              sx={{
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <Button
                component={Link}
                to={item.path}
                sx={{ 
                  color: "black",
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                {item.label}
              </Button>
            </MenuItem>
          ))}
          <MenuItem sx={{ justifyContent: 'center' }}>
            <Button
              // component={Link}
              // to="/#register-for-test"
              onClick={handleSignUpPage}
              sx={{
                background: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                color: "white",
                width: '100%',
                padding: 1,
                borderRadius: 1,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                }
              }}
            >
              REGISTER
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

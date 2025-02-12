import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#000000"}}>
      <Toolbar sx={{width:"70%",margin:"auto",display:"flex", justifyContent:"space-around"}}>
        {/* Logo or Brand Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:"flex",gap:2, alignItems:"center" }}>
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
        </Typography>

        {/* Navigation Links for Larger Screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:"space-between",gap:5 }}>
          <Button className="nav-btn">Curriculum</Button>
          <Button className="nav-btn">Why This Course</Button>
          <Button className="nav-btn">FEES</Button>
          <Button className="nav-btn">FAQs</Button>
          <Button className="nav-btn">Event</Button>
          <Button sx={{backgroundColor:"white"}}>Register for Test</Button>
        </Box>

        {/* Hamburger Menu Icon for Smaller Screens */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } }}
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
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          
        >
          <MenuItem onClick={handleMenuClose}>CURRICULAM</MenuItem>
          <MenuItem onClick={handleMenuClose}>WHY THIS COURSE</MenuItem>
          <MenuItem onClick={handleMenuClose}>FEES</MenuItem>
          <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
          <MenuItem onClick={handleMenuClose}>EVENT</MenuItem>
          <MenuItem>
            <Button sx={{ backgroundColor:"black",color:"white"}}>REGISTER FOR TEST</Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
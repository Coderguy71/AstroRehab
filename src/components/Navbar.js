import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery, 
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navItems = [
    { text: 'What We Do', path: '/what-we-do' },
    { text: 'Games', path: '/games' },
    { text: 'Team', path: '/team' },
    { text: 'Contact', path: '/contact' },
    { text: 'Rehabilitation', path: '/rehabilitation' }
  ];

  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(45deg, #3D365C 30%, #7C4585 90%)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="AstroRehab Logo"
            sx={{
              width: { xs: 40, md: 60 },
              height: { xs: 40, md: 60 },
              borderRadius: '50%',
              border: '2px solid #F8B55F',
              background: 'linear-gradient(45deg, #F8B55F 30%, #C95792 90%)',
              objectFit: 'cover'
            }}
          />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#F8B55F',
              fontWeight: 'bold',
              '&:hover': {
                color: '#C95792'
              }
            }}
          >
            AstroRehab
          </Typography>
        </Box>
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{
                color: item.text === 'Games' ? '#F8B55F' : '#F8B55F',
                mx: 1,
                fontWeight: item.text === 'Games' ? 'bold' : 'normal',
                fontSize: item.text === 'Games' ? '1.05rem' : '1rem',
                position: 'relative',
                '&:after': item.text === 'Games' ? {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '10%',
                  width: '80%',
                  height: '2px',
                  backgroundColor: '#F8B55F',
                  transform: 'scaleX(1)',
                  transition: 'transform 0.3s ease',
                } : {},
                '&:hover': {
                  color: '#C95792',
                  background: 'rgba(248, 181, 95, 0.1)',
                  transform: 'translateY(-2px)',
                  '&:after': item.text === 'Games' ? {
                    transform: 'scaleX(1.2)',
                    backgroundColor: '#C95792',
                  } : {}
                },
                transition: 'all 0.3s ease',
              }}
            >
              {item.text}
              {item.text === 'Games' && (
                <Box 
                  component="span"
                  sx={{
                    ml: 1,
                    fontSize: '0.7rem',
                    background: 'linear-gradient(45deg, #F8B55F, #C95792)',
                    color: '#1A1A2E',
                    px: 1,
                    py: 0.2,
                    borderRadius: 4,
                    fontWeight: 'bold',
                  }}
                >
                  NEW
                </Box>
              )}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="mobile-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
            sx={{
              color: '#F8B55F',
              '&:hover': {
                color: '#C95792',
                background: 'rgba(248, 181, 95, 0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={mobileMenuAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMenuClose}
            sx={{
              '& .MuiPaper-root': {
                background: 'linear-gradient(45deg, #3D365C 30%, #7C4585 90%)',
                color: '#F8B55F',
                minWidth: '200px',
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem 
                key={item.path} 
                component={RouterLink} 
                to={item.path}
                onClick={handleMenuClose}
                sx={{
                  '&:hover': {
                    color: '#C95792',
                    background: 'rgba(248, 181, 95, 0.1)',
                  },
                }}
              >
                {item.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

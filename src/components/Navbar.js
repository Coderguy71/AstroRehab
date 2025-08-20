import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(45deg, #3D365C 30%, #7C4585 90%)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <Toolbar>
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
        <Box sx={{ ml: 4 }}>
          <Button
            component={RouterLink}
            to="/what-we-do"
            sx={{
              color: '#F8B55F',
              mx: 1,
              '&:hover': {
                color: '#C95792',
                background: 'rgba(248, 181, 95, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
            }}
          >
            What We Do
          </Button>
          <Button
            component={RouterLink}
            to="/gameplay"
            sx={{
              color: '#F8B55F',
              mx: 1,
              '&:hover': {
                color: '#C95792',
                background: 'rgba(248, 181, 95, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
            }}
          >
            Game Play Demo
          </Button>
          <Button 
            component={RouterLink} 
            to="/team"
            sx={{
              color: '#F8B55F',
              mx: 1,
              '&:hover': {
                color: '#C95792',
                background: 'rgba(248, 181, 95, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
            }}
          >
            Team
          </Button>
          <Button 
            component={RouterLink} 
            to="/contact"
            sx={{
              color: '#F8B55F',
              mx: 1,
              '&:hover': {
                color: '#C95792',
                background: 'rgba(248, 181, 95, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
            }}
          >
            Contact
          </Button>
          <Button 
            component={RouterLink} 
            to="/rehabilitation"
            sx={{
              color: '#F8B55F',
              mx: 1,
              '&:hover': {
                color: '#C95792',
                background: 'rgba(248, 181, 95, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
            }}
          >
            Rehabilitation
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from 'react';
import { Box, Typography, Button, Container, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #3D365C 30%, #7C4585 90%)',
        position: 'relative',
        overflow: 'hidden',
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Mock Logo */}
      <Box
        component="img"
        src="/logo.png"
        alt="AstroRehab Logo"
        sx={{
          width: { xs: '150px', md: '200px' },
          height: { xs: '150px', md: '200px' },
          mb: { xs: 4, md: 8 },
          borderRadius: '50%',
          border: '4px solid #F8B55F',
          background: 'linear-gradient(45deg, #F8B55F 30%, #C95792 90%)',
          objectFit: 'cover'
        }}
      />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 4,
              background: 'linear-gradient(45deg, #F8B55F 30%, #C95792 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Welcome to AstroRehab
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: '#F8B55F',
              mb: 4,
              maxWidth: '600px'
            }}
          >
            Experience revolutionary physical rehabilitation through immersive Virtual Reality games
          </Typography>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Button
              component={Link}
              to="/gameplay"
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                fontSize: '1.25rem',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(45deg, #F8B55F 30%, #C95792 90%)',
                color: '#3D365C',
                position: 'relative',
                zIndex: 2,
                '&:hover': {
                  background: 'linear-gradient(45deg, #C95792 30%, #7C4585 90%)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Game Demos →
            </Button>
          </Box>
          
          {/* Early Access Sign-up Section */}
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            sx={{
              mt: 8,
              p: 4,
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(248, 181, 95, 0.3)',
              maxWidth: '600px',
              mx: 'auto',
              textAlign: 'center'
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#F8B55F', 
                mb: 2,
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Sign up for early access to AstroRehab
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#fff', 
                mb: 3,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Be among the first to experience our revolutionary VR rehabilitation platform.
            </Typography>
            <Button
              component="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEARg_p1Z2TMgP-BKzVkDDU_JYl2XdmPtgAfoMZqzpi_eAJw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(45deg, #F8B55F 30%, #C95792 90%)',
                color: '#3D365C',
                whiteSpace: 'nowrap',
                '&:hover': {
                  background: 'linear-gradient(45deg, #C95792 30%, #7C4585 90%)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Early Access
            </Button>
          </Box>
        </motion.div>
      </Container>
      {/* Space background elements */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <Box
          sx={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.2) 30%, rgba(139, 195, 74, 0.2) 90%)',
            animation: 'float 10s ease-in-out infinite',
            top: '20%',
            left: '10%'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.2) 30%, rgba(139, 195, 74, 0.2) 90%)',
            animation: 'float 12s ease-in-out infinite',
            top: '40%',
            right: '15%'
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;

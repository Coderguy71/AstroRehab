import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const GamePage = () => {
  return (
    <Box sx={{ 
      py: 8, 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0F0C29 0%, #302B63 50%, #24243E 100%)',
      color: '#fff'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              color: '#F8B55F', 
              fontWeight: 'bold', 
              mb: 6,
              textAlign: 'center',
              textShadow: '0 0 10px rgba(248, 181, 95, 0.5)'
            }}
          >
            Our Games
          </Typography>

          <Paper 
            elevation={6} 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ 
              mb: 6, 
              background: 'linear-gradient(45deg, rgba(61, 54, 92, 0.9) 0%, rgba(124, 69, 133, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              border: '1px solid rgba(248, 181, 95, 0.3)',
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 25px rgba(248, 181, 95, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                color: '#F8B55F', 
                mb: 2, 
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}
            >
              Reaction Time Module
            </Typography>
            <Typography 
              variant="h5" 
              component="p" 
              sx={{ 
                color: '#fff', 
                mb: 4, 
                fontWeight: 300,
                maxWidth: '800px', 
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Test and improve your reaction time with our space-themed challenge. Perfect for cognitive training and fun!
            </Typography>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                component="a"
                href="https://astrorehab.itch.io/reactiontimemodule"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(45deg, #F8B55F 0%, #C95792 100%)',
                  color: '#1A1A2E',
                  fontWeight: 'bold',
                  px: 5,
                  py: 1.5,
                  fontSize: '1.2rem',
                  borderRadius: 50,
                  textTransform: 'none',
                  boxShadow: '0 4px 15px rgba(248, 181, 95, 0.4)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(248, 181, 95, 0.6)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                🚀 Play Now on itch.io
              </Button>
            </motion.div>
          </Paper>

          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              color: '#F8B55F', 
              mt: 8,
              mb: 4,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            More Games Coming Soon!
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#fff', 
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6
            }}
          >
            We're constantly developing new and exciting games to help with cognitive training and rehabilitation.
            Check back soon for updates!
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GamePage;

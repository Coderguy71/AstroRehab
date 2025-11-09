import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Link,
  Tabs,
  Tab,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`rehab-tabpanel-${index}`}
      aria-labelledby={`rehab-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `rehab-tab-${index}`,
    'aria-controls': `rehab-tabpanel-${index}`,
  };
}

const Rehabilitation = () => {
  const theme = useTheme();
  // Research section coming soon state

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
              mb: 4,
              textAlign: 'center',
              textShadow: '0 0 10px rgba(248, 181, 95, 0.5)'
            }}
          >
            The Research Behind Our Game - Coming Soon
          </Typography>

          <Paper 
            elevation={6} 
            sx={{ 
              mb: 4, 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              border: '1px solid rgba(248, 181, 95, 0.2)'
            }}
          >
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="h4" component="h2" sx={{ color: '#F8B55F', mb: 3, fontWeight: 'bold' }}>
                Research Section Coming Soon
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', mb: 4, lineHeight: 1.8, maxWidth: '800px', mx: 'auto' }}>
                We're currently working on compiling our research findings. Our team is dedicated to providing you with detailed, 
                evidence-based information about the science behind our game. Please check back soon for updates!
              </Typography>
              <Box 
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                sx={{
                  display: 'inline-block',
                  px: 4,
                  py: 2,
                  bgcolor: 'rgba(248, 181, 95, 0.1)',
                  borderRadius: 2,
                  border: '1px solid rgba(248, 181, 95, 0.3)'
                }}
              >
                <Typography variant="h6" sx={{ color: '#F8B55F' }}>Stay Tuned!</Typography>
              </Box>
            </Box>
          </Paper>
          
          <Paper 
            elevation={6} 
            sx={{ 
              mb: 4, 
              mt: 6,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              border: '1px solid rgba(248, 181, 95, 0.2)',
              p: 4,
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" component="h2" sx={{ color: '#F8B55F', mb: 3, fontWeight: 'bold' }}>
              Try Our Reaction Time Game
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', mb: 4, lineHeight: 1.8, maxWidth: '800px', mx: 'auto' }}>
              Experience our space-themed reaction time challenge and test your reflexes in an engaging way!
            </Typography>
            <Button
              component="a"
              href="https://astrorehab.itch.io/reactiontimemodule"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#F8B55F',
                color: '#1A1A2E',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: '#e6a34a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(248, 181, 95, 0.3)',
                },
                transition: 'all 0.3s ease',
                fontSize: '1.1rem',
                borderRadius: 2
              }}
            >
              Play Now on itch.io
            </Button>
          </Paper>
          
          <Typography variant="body2" color="#aaa" align="center" sx={{ mt: 4 }}>
            Need help? Contact us at{' '}
            <Link href="mailto:officalastrorehab@gmail.com" color="#F8B55F">
              officalastrorehab@gmail.com
            </Link>
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Rehabilitation;

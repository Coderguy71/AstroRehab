import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  const sections = [
    {
      title: 'Our Mission',
      content: 'At AstroRehab, we\'re rethinking how cognitive rehab is done. Traditional rehab can feel repetitive and discouraging. We\'re changing that by using games to make it engaging. Our mission is to help people improve memory, attention, and other areas that have been affected by a stroke, through fun, space-themed gameplay that keeps them motivated.'
    },
    {
      title: 'The Project',
      content: 'AstroRehab is a space-based training platform made up of different levels and modules, each designed to focus on a specific skill. In one level, you control a spaceship and dodge asteroids as the game speeds up. In another, you might have to remember routes through star systems or switch quickly between tasks. Every level is built to strengthen things like reaction time, working memory, attention, and spatial awareness.'
    },
    {
      title: 'Why It Matters',
      content: 'Cognitive and physical challenges can come from strokes, brain injuries, stress, or neurological conditions. They make it harder to focus, move, or process information in everyday life. AstroRehab gives people a way to practice these skills in a setting that feels motivating and enjoyable instead of clinical and repetitive.'
    },
    {
      title: 'The Science Behind It',
      content: 'AstroRehab is based on research in neuroscience and game-based learning. Studies show that adaptive games can improve focus, memory, and brain flexibility. We\'ve taken ideas from cognitive rehab and built them into interactive challenges that give instant feedback and encourage progress. Research backed by Stevens Institute of Technology gives AstroRehab the credibility our users deserve.'
    },
    {
      title: 'Who It\'s For',
      content: 'AstroRehab is for anyone working on their cognitive skills. That includes people recovering from a stroke, rebuilding memory after an injury, or working on focus and executive function. It\'s also for people who want to stay sharp and strengthen their thinking or movements in daily life.'
    },
    {
      title: 'The Creator\'s Note',
      content: 'We started AstroRehab because we wanted rehab to be something people look forward to, not something they avoid. By combining our interest in cognitive science with game design, we created a platform that\'s both useful and fun. AstroRehab is about helping people regain control and improve one step at a time.'
    }
  ];

  return (
    <Box sx={{ 
      py: 8,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#ffffff'
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              mb: 6, 
              textAlign: 'center', 
              color: '#F8B55F',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            About Us
          </Typography>
          
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  mb: 4, 
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: 'rgba(248, 181, 95, 0.5)'
                  }
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h2" 
                  sx={{ 
                    mb: 2, 
                    color: '#F8B55F',
                    fontWeight: 'bold'
                  }}
                >
                  {section.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8,
                    color: '#e0e0e0',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {section.content}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 69, 133, 0.1) 0%, rgba(61, 54, 92, 0) 70%)',
            top: '-100px',
            right: '-100px'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(248, 181, 95, 0.1) 0%, rgba(61, 54, 92, 0) 70%)',
            bottom: '50px',
            left: '-50px'
          }}
        />
      </Box>
    </Box>
  );
};

export default WhatWeDo;

import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

const GamePlayDemo = () => {
  const services = [
    {
      title: 'Reaction Time Module',
      description: 'Experience immersive physical therapy through virtual reality games that make rehabilitation engaging and effective.',
      videoUrl: 'https://drive.google.com/file/d/14s9rOh8qZtbc29H_ZrfKSsleN2_uzC_O/preview',
      isGoogleDrive: true
    },
    {
      title: 'Memory Module',
      description: 'Personalized rehabilitation programs tailored to your specific needs and medical conditions.',
      videoUrl: 'https://drive.google.com/file/d/1ufNBrEWs_A-wuBYxoiT7xxhdZzernJ5z/preview',
      isGoogleDrive: true
    },
    {
      title: 'More Games Coming Soon!',
      description: 'We at AstroRehab are continuously working on new games to provide you with the best possible experience.',
      videoUrl: 'https://drive.google.com/file/d/1raBgRgCgUvrKV-T0QgbNKSREqEQHCKIM/preview',
      isGoogleDrive: true
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(61, 54, 92, 0.8) 0%, rgba(124, 69, 133, 0.8) 100%)',
          zIndex: -1
        }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h2" sx={{ 
            mb: 6, 
            textAlign: 'center', 
            color: '#F8B55F',
            background: 'linear-gradient(135deg, rgba(61, 54, 92, 0.3) 0%, rgba(124, 69, 133, 0.3) 100%)',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            Gameplay Demo
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.1) 30%, rgba(139, 195, 74, 0.1) 90%)',
                      border: '1px solid rgba(76, 175, 80, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                      {service.isGoogleDrive ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={service.videoUrl}
                          title={service.title}
                          frameBorder="0"
                          allow="autoplay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            borderRadius: '4px 4px 0 0'
                          }}
                        />
                      ) : (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${service.videoId}`}
                          title={service.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            borderRadius: '4px 4px 0 0'
                          }}
                        />
                      )}
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ 
              color: '#F8B55F',
              background: 'linear-gradient(135deg, rgba(61, 54, 92, 0.3) 0%, rgba(124, 69, 133, 0.3) 100%)',
              padding: '0.5rem 1rem',
              borderRadius: '8px'
            }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#C95792',
              background: 'linear-gradient(135deg, rgba(61, 54, 92, 0.3) 0%, rgba(124, 69, 133, 0.3) 100%)',
              padding: '1rem',
              borderRadius: '8px'
            }}>
              {service.description}
            </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GamePlayDemo;

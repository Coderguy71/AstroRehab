import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ishaan Trivedi',
      role: 'Co-Founder',
      description: 'Ishaan co-leads AstroRehab’s development and vision, contributing expertise in Unity, game design, and cognitive rehabilitation integration.',
      avatar: '/IshaanTrivedi_Headshot.png'
    },
    {
      name: 'Fabian Salas',
      role: 'Co-Founder',
      description: 'Fabian co-leads AstroRehab’s development and vision, bringing a strong background in Unity, systems design, and immersive gameplay mechanics.',
      avatar: '/FabianSalas_Headshot.png'
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
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: 'center',
                      gap: 4,
                      p: 4,
                      background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.1) 30%, rgba(139, 195, 74, 0.1) 90%)',
                      border: '1px solid rgba(76, 175, 80, 0.2)',
                      borderRadius: 2
                    }}
                  >
                    <Avatar
                      src={member.avatar}
                      sx={{ 
                        width: 150, 
                        height: 150,
                        border: '3px solid #F8B55F',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        '& img': {
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%'
                        }
                      }}
                      imgProps={{
                        style: {
                          objectFit: 'cover'
                        }
                      }}
                    />
                    <Box>
                      <Typography variant="h4" sx={{ 
                        color: '#F8B55F',
                        mb: 1,
                        background: 'linear-gradient(135deg, rgba(61, 54, 92, 0.3) 0%, rgba(124, 69, 133, 0.3) 100%)',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px'
                      }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ 
                        color: '#C95792',
                        mb: 2,
                        background: 'linear-gradient(135deg, rgba(61, 54, 92, 0.3) 0%, rgba(124, 69, 133, 0.3) 100%)',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px'
                      }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: 'rgba(255, 165, 0, 0.8)',
                        background: 'linear-gradient(135deg, rgba(61, 54, 92, 0.3) 0%, rgba(124, 69, 133, 0.3) 100%)',
                        padding: '1rem',
                        borderRadius: '8px',
                        mt: 2
                      }}>
                        {member.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Team;

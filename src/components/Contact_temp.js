import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(124, 69, 133, 0.5)'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(200, 87, 146, 0.7)'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(200, 87, 146, 0.9)'
      },
      color: 'white'
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(200, 87, 146, 0.8)'
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgba(200, 87, 146, 0.9)'
    },
    '& .MuiOutlinedInput-input': {
      color: 'white'
    }
  };

  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h2" sx={{ 
            mb: 6, 
            textAlign: 'center', 
            color: 'white',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h4" sx={{ 
                  color: 'white', 
                  mb: 4,
                  fontWeight: 600,
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#F8B55F', 
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7
                }}>
                  We'd love to hear from you! Whether you're interested in our services or have any questions about VR rehabilitation, our team is here to help.
                </Typography>
                <Box sx={{ 
                  mb: 4,
                  p: 3,
                  background: 'rgba(61, 54, 92, 0.2)',
                  borderRadius: 2,
                  borderLeft: '4px solid #7C4585'
                }}>
                  <Typography variant="body1" sx={{ 
                    color: '#C95792', 
                    mb: 1,
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}>
                    Email:
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'rgba(248, 181, 95, 0.9)',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    '&:hover': {
                      color: 'white',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }
                  }}>
                    ishaantrivedi0608@gmail.com
                  </Typography>
                </Box>
                <Box sx={{
                  p: 3,
                  background: 'rgba(61, 54, 92, 0.2)',
                  borderRadius: 2,
                  borderLeft: '4px solid #7C4585'
                }}>
                  <Typography variant="body1" sx={{ 
                    color: '#C95792', 
                    mb: 1,
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}>
                    Phone:
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'rgba(248, 181, 95, 0.9)',
                    fontSize: '1.1rem',
                    fontWeight: 400
                  }}>
                    (555) 123-4567
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="form"
                  sx={{
                    background: 'rgba(28, 25, 46, 0.7)',
                    border: '1px solid rgba(124, 69, 133, 0.4)',
                    borderRadius: 2,
                    p: 4,
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)'
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(45deg, #3D365C 30%, #7C4585 90%)',
                          color: 'white',
                          padding: '12px 24px',
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          boxShadow: '0 4px 15px rgba(61, 54, 92, 0.4)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #7C4585 0%, #C95792 90%)',
                            boxShadow: '0 6px 20px rgba(200, 87, 146, 0.4)',
                            transform: 'translateY(-2px)'
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;

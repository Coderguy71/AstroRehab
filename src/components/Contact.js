import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { submitContactForm } from '../firebase/config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    setLoading(true);
    
    try {
      console.log('Calling submitContactForm with data:', formData);
      const result = await submitContactForm(formData);
      console.log('submitContactForm result:', result);
      
      if (result && result.success) {
        console.log('Form submission successful');
        setSnackbar({
          open: true,
          message: 'Thank you for your message! We will get back to you soon.',
          severity: 'success'
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission failed:', result?.error || 'Unknown error');
        setSnackbar({
          open: true,
          message: `Failed to send message: ${result?.error?.message || 'Unknown error'}`,
          severity: 'error'
        });
      }
    } catch (error) {
      console.error('Error in form submission:', {
        message: error.message,
        code: error.code,
        stack: error.stack
      });
      setSnackbar({
        open: true,
        message: `Failed to send message: ${error.message || 'Please try again later.'}`,
        severity: 'error'
      });
    } finally {
      console.log('Form submission process completed');
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

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
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h2" sx={{ 
            mb: 6, 
            textAlign: 'center', 
            color: '#F8B55F',
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Contact Us
          </Typography>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}>
                  <Typography variant="h4" sx={{ 
                    color: '#F8B55F', 
                    mb: 3,
                    fontWeight: 600
                  }}>
                    Get in Touch
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    mb: 4, 
                    lineHeight: 1.8 
                  }}>
                    Have questions about AstroRehab or want to learn more about our cognitive rehabilitation solutions? 
                    Fill out the form and we'll get back to you as soon as possible.
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ 
                      color: '#C95792', 
                      mb: 2, 
                      fontWeight: 600 
                    }}>
                      Email Us
                    </Typography>
                    <a href="mailto:officalastrorehab@gmail.com" style={{ textDecoration: 'none' }}>
                      <Typography variant="body1" sx={{ 
                        color: 'rgba(248, 181, 95, 0.9)',
                        fontSize: '1.1rem',
                        '&:hover': {
                          color: '#F8B55F',
                          textDecoration: 'underline'
                        },
                        transition: 'all 0.3s ease'
                      }}>
                        officalastrorehab@gmail.com
                      </Typography>
                    </a>
                  </Box>
                  
                  <Box>
                    <Typography variant="h6" sx={{ 
                      color: '#C95792', 
                      mb: 2, 
                      fontWeight: 600 
                    }}>
                      Connect With Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#F8B55F' }}
                      >
                        <i className="fab fa-linkedin" style={{ fontSize: '1.8rem' }}></i>
                      </a>
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#F8B55F' }}
                      >
                        <i className="fab fa-github" style={{ fontSize: '1.8rem' }}></i>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box 
                  component="form" 
                  onSubmit={handleSubmit}
                  sx={{ 
                    p: 4, 
                    borderRadius: 2,
                    background: 'rgba(28, 25, 46, 0.7)',
                    border: '1px solid rgba(124, 69, 133, 0.4)',
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
                        name="name"
                        variant="outlined"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        variant="outlined"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        sx={inputStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        disabled={loading}
                        sx={{
                          backgroundColor: '#F8B55F',
                          color: '#0D0D1A',
                          '&:hover': {
                            backgroundColor: '#e6a04a',
                          },
                          '&.Mui-disabled': {
                            backgroundColor: 'rgba(248, 181, 95, 0.5)',
                            color: 'rgba(13, 13, 26, 0.6)'
                          },
                          fontWeight: 600,
                          px: 4,
                          py: 1.5,
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          boxShadow: '0 4px 14px rgba(248, 181, 95, 0.4)'
                        }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ 
            width: '100%',
            backgroundColor: snackbar.severity === 'success' ? '#C85792' : '#d32f2f',
            '& .MuiAlert-icon': {
              color: '#fff',
            },
            '& .MuiAlert-message': {
              color: '#fff',
            },
            '& .MuiSvgIcon-root': {
              color: '#fff',
            },
            '&:hover': {
              backgroundColor: snackbar.severity === 'success' ? '#b04a7f' : '#c62828',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

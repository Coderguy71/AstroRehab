import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C4585',
      light: '#C95792',
      dark: '#3D365C',
    },
    secondary: {
      main: '#F8B55F',
    },
    background: {
      default: '#3D365C',
      paper: '#7C4585',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      contrastText: '#3D365C',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            color: '#FFFFFF',
          },
          '&.MuiTypography-body2': {
            color: '#FFFFFF',
          },
          '&.MuiTypography-h1': {
            color: '#FFFFFF',
          },
          '&.MuiTypography-h2': {
            color: '#FFFFFF',
          },
          '&.MuiTypography-h3': {
            color: '#FFFFFF',
          },
          '&.MuiTypography-h4': {
            color: '#FFFFFF',
          },
          '&.MuiTypography-h5': {
            color: '#FFFFFF',
          },
          '&.MuiTypography-h6': {
            color: '#FFFFFF',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(45deg, #F8B55F 30%, #C95792 90%)',
          color: '#3D365C',
          '&:hover': {
            background: 'linear-gradient(45deg, #C95792 30%, #7C4585 90%)'
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(45deg, #7C4585 30%, #3D365C 90%)',
        },
      },
    },
  },
});

export default theme;

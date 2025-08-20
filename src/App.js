import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamePlayDemo from './components/GamePlayDemo';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import Contact from './components/Contact';
import Rehabilitation from './components/Rehabilitation';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/gameplay" element={<GamePlayDemo />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rehabilitation" element={<Rehabilitation />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Courses from './components/Courses'; 
import Achievements from "./components/Achievements";
import Team from "./components/Team";
import Footer from './components/Footer';
import Contest from './components/Contest';
import Contact from './components/Contact';
import Career from './components/Career';
import Mentorship from './components/Mentorship';  // Mentorship from components folder

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Courses />  
            <Achievements />
            <Team />
          </>
        } />
        <Route path="/contest" element={<Contest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/mentorship" element={<Mentorship />} />  {/* Mentorship Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

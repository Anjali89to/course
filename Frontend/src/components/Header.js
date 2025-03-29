import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* ✅ Corrected path: Remove "/public" */}
        <img src="/assets/thinkAcademies-logo.jpg" alt="Think Academies Logo" className="logo-img" />
        {/* Corrected path: Change "assests" to "assets" */}

        </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contest">Contest</Link>
        <Link to="/mentorship">Mentorship</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">
          <button className="career-btn">Career</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

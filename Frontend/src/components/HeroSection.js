import React from "react";
import "../styles/heroSection.css"; // Ensure correct CSS path

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div> {/* Dark Gradient Overlay */}
      <div className="hero-content">
        <h1>
          <span className="highlight">Turn Your Aspirations</span> <br /> 
          into <span className="bold-text">Achievements</span> <br />
          with <span className="academy-name">Think Academies!</span>
        </h1>
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import "../styles/Team.css";  // Agar 'styles' folder me hai

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {/* 🏅 Team Member 1 */}
          <div className="team-box">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Aman Sharma</h3>
            <p>Lead Instructor</p>
          </div>

          {/* 🏅 Team Member 2 */}
          <div className="team-box">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Priya Verma</h3>
            <p>Senior Developer</p>
          </div>

          {/* 🏅 Team Member 3 */}
          <div className="team-box">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Rohan Gupta</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </div>
    </section>
  );
}

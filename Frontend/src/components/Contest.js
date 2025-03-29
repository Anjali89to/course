import React from "react";
import '../styles/Contest.css'; 

const Contest = () => {
  return (
    <div className="contest-container">
      <h1 className="title">🏆 Coding Contest 2025</h1>
      <p className="description">
        Show off your coding skills, compete with the best, and win exciting prizes!
      </p>

      <div className="contest-details">
        <p><strong>📅 Date:</strong> 10th April 2025</p>
        <p><strong>⏳ Duration:</strong> 2 Hours</p>
        <p><strong>💻 Platform:</strong> Online</p>
        <p><strong>🏆 Prizes:</strong> Cash Rewards & Goodies for Top 3</p>
      </div>

      <div className="contest-rules">
        <h2>📜 Rules & Guidelines</h2>
        <ul>
          <li>All solutions must be original (No plagiarism).</li>
          <li>Use any programming language of your choice.</li>
          <li>The leaderboard updates in real time.</li>
          <li>Register before the deadline to participate.</li>
        </ul>
      </div>

      <div className="register-section">
        <button className="register-btn">Register Now</button>
      </div>

      <div className="contact">
        <h3>📧 Contact & Support</h3>
        <p>Email: support@yourwebsite.com</p>
        <p>Phone: +91 12345 67890</p>
      </div>
    </div>
  );
};

export default Contest;

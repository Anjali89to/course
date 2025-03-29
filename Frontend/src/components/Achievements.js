import React, { useState, useEffect } from "react";
import "../styles/Achievements.css"; // Import CSS

export default function Achievements() {
  const [studentsEnrolled, setStudentsEnrolled] = useState(5000); // Start at 5000

  // Enrolled Students Counter Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentsEnrolled((prev) => {
        if (prev >= 10000) {
          clearInterval(interval);
          return 10000;
        }
        return prev + Math.floor(Math.random() * 50) + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="achievements">
      <div className="container">
        <h2>Our Achievements</h2>

        {/* Marquee Wrapper */}
        <div className="marquee-container">
          <div className="marquee">
            <div className="achievements-grid">
              {/* 🎓 Students Enrolled (Animated Count) */}
              <div className="achievement-box">
                <h3>📚 {studentsEnrolled.toLocaleString()}+</h3>
                <p>Students Enrolled</p>
                <p>We have successfully enrolled over <strong>10,000 students</strong> in various courses.</p>
              </div>

              {/* 🏆 Top Positions Achieved */}
              <div className="achievement-box">
                <h3>🏆 250+</h3>
                <p>Top Positions Achieved</p>
                <p>Our students have secured <strong>250+ positions</strong> in top companies.</p>
              </div>

              {/* 💻 Courses Available */}
              <div className="achievement-box">
                <h3>💻 50+</h3>
                <p>Courses Available</p>
                <p>We offer <strong>50+ courses</strong> in programming, AI, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

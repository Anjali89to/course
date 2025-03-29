import React from "react";
import "../styles/Career.css";

const Career = () => {
  return (
    <section className="career-container">
      {/* Half Page Background Section */}
      <div className="career-hero">
        <div className="overlay">
          <h1>Shape Your Future with Think Academies</h1>
          <p>
            "Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today." – Malcolm X
          </p>
        </div>
      </div>

      {/* Courses Section (Boxes Neeche Honge) */}
      <div className="courses-container">
        <div className="course-box">
          <h2>course 1: Introduction to Financial Markets</h2>
          <p>
            This course provides a foundation in financial markets, covering
            stocks, bonds, risk management, and investment strategies.
          </p>
        </div>

        <div className="course-box">
          <h2>Course 2: Advanced Trading Strategies</h2>
          <p>
            This course covers advanced trading strategies in Indian equity &
            derivatives markets, including technical analysis and options
            trading.
          </p>
        </div>

        <div className="course-box">
          <h2>Course 3: Personal Finance & Wealth Management</h2>
          <p>
            Learn about budgeting, saving, tax planning, and investment
            strategies tailored for Indian individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;

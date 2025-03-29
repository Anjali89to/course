import React, { useState, useEffect } from "react";
import "../styles/Courses.css"; // Import CSS for styling

const Courses = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60); // 3 days countdown in seconds

  // Countdown Timer Effect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Convert seconds into Days, Hours, Minutes, Seconds
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <section className="courses">
      <div className="container">
        <h2>Our Courses</h2>

        {/* Countdown Timer for Enrollment */}
        <div className="countdown-timer">
          <h3>⏳ Enrollment Ends In:</h3>
          <div className="countdown">{formatTime(timeLeft)}</div>
        </div>

        <div className="course-grid">
          {/* Course 1 */}
          <div className="course-box">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1IIj39v5D29XVscnUfuBVYeCi278BCZApA&s" 
              alt="Financial Markets Course" 
              className="course-image"
            />
            <h3>📘 Introduction to Financial Markets and Investment Strategies in India</h3>
            <p>Learn the fundamentals of financial markets, investment strategies, and stock market basics.</p>
            <span className="course-price">₹30,000</span>
          </div>

          {/* Course 2 */}
          <div className="course-box">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UslGqmLtsvdhQLHyBBrF0ChfWSdwXM2z5A&s" 
              alt="Advanced Trading Course" 
              className="course-image"
            />
            <h3>📊 Advanced Trading Strategies for Indian Equity & Derivatives Markets</h3>
            <p>Master advanced trading techniques, options, and futures trading strategies.</p>
            <span className="course-price">₹46,000</span>
          </div>

          {/* Course 3 */}
          <div className="course-box">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYws6ziOX3uvOSqVcivbRxA3OmojX1mKt5A&s" 
              alt="Personal Finance and Wealth Management" 
              className="course-image"
            />
            <h3>💰 Personal Finance and Wealth Management for Indians</h3>
            <p>Develop financial planning skills, investment strategies, and tax-saving techniques.</p>
            <span className="course-price">₹67,999</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

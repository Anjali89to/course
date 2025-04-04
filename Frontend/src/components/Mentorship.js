import React, { useState } from "react";
import "../styles/mentorship.css"; // Create this file for styling

const Mentorship = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    careerGoal: "",
    preferredMentorshipType: "",
    experienceLevel: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/mentorship`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setResponseMessage(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          careerGoal: "",
          preferredMentorshipType: "",
          experienceLevel: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="mentorship-page">
      <div className="mentorship-container">
        <h2>Apply for Mentorship</h2>
        {responseMessage && <p className="success">{responseMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
          <input 
            type="text"
            name="careerGoal"
            placeholder="Career Goal"
            value={formData.careerGoal}
            onChange={handleChange}
            required 
          />
          <input 
            type="text"
            name="preferredMentorshipType"
            placeholder="Preferred Mentorship Type (e.g., One-on-One)"
            value={formData.preferredMentorshipType}
            onChange={handleChange}
            required 
          />
          <input 
            type="text"
            name="experienceLevel"
            placeholder="Experience Level (Beginner, Intermediate, Advanced)"
            value={formData.experienceLevel}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required 
          />
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Mentorship;

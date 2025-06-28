// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {submitted && <div className="success-message">Thanks! We'll get back to you soon.</div>}

        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label>Your Name</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label>Your Email</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <label>Subject</label>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label>Your Message</label>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

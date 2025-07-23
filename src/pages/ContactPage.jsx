import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const interests = ['Crafting', 'Travelling', 'Gaming', 'Tutoring'];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_immxosk',
        'template_ff1w1gf',
        formData,
        'maM6Zs53ddz1O3azf'
      )
      .then(
        (result) => {
          setSubmitMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setSubmitMessage('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact & Interests</h2>
      <div className="contact-container">
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
        <div className="interests-section">
          <h3>Interests</h3>
          <ul className="interests-list">
            {interests.map((interest, index) => (
              <li key={index} className="interest-item">{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

import React from 'react';

function Contact() {
  // Basic form handler - prevents default page reload
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submission is not yet implemented.");
    // In a real app, you'd handle form data here (e.g., send to an API)
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:gaurav25narula@gmail.com">gaurav25narula@gmail.com</a></p>
        <p>Phone: <a href="tel:+919811107628">+91 9811107628</a></p>
        <p>LinkedIn: <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">[Your LinkedIn Profile]</a> {/* Replace with your actual LinkedIn URL and preferred text */}</p>
        {/* Add other links like GitHub, Twitter if desired */}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send a Message</h3>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
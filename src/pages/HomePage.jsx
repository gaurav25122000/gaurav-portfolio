import React from 'react';
import './HomePage.css';

function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <h1 className="home-title">Gaurav Narula</h1>
        <p className="home-subtitle">Software Developer II</p>
        <p className="home-location">Delhi, India</p>
        <div className="home-contact">
          <a href="mailto:gaurav25narula@gmail.com">gaurav25narula@gmail.com</a>
          <span> | </span>
          <a href="tel:+919811107628">+(91) 9811107628</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/gaurav-narula-5b3a32201/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
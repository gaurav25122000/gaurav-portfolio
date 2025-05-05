import React from 'react';

function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      {/* Consider adding a professional headshot here */}
      {/* <img src="/path/to/your/photo.jpg" alt="Gaurav Narula" className="profile-photo"/> */}
      <p>
        {/* Expand on your summary here - career goals, work ethic, passion for backend */}
        Driven by a curiosity for how systems work and a desire to build robust, scalable solutions. I thrive on tackling complex backend challenges and enjoy collaborating with teams to bring efficient software to life. My goal is to continuously learn and contribute to impactful projects in the tech industry.
      </p>
      <h3>Skills</h3>
      <div className="skills-container">
        <div className="skills-list">
          <h4>Technical Skills</h4>
          <ul>
            <li>Python</li><li>Ruby on Rails (ROR)</li><li>C</li><li>C++</li><li>Sanic</li><li>Vyked</li><li>SQL</li><li>MongoDB</li>
          </ul>
        </div>
        <div className="skills-list">
          <h4>Soft Skills</h4>
          <ul>
            <li>Creative thinking</li><li>Managerial skills</li><li>Adaptability</li><li>Leadership</li><li>Problem-solving</li><li>Time management</li><li>Interpersonal skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
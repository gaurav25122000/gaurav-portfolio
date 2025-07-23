import React from 'react';
import './EducationPage.css';

function EducationPage() {
  return (
    <section id="education" className="section education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <h3>Bachelor of Technology - Computer Science Engineering</h3>
        <p className="institution">Bharati Vidyapeeth's College of Engineering</p>
        <p className="cgpa">CGPA - 9.4/10</p>
        <p className="duration">2018 - 2022</p>
      </div>
    </section>
  );
}

export default EducationPage;
import React from 'react';
import './SkillsPage.css';

const technicalSkills = [
  'Python', 'C/C++', 'SQL (Postgres)', 'NoSQL (MongoDB, Cassandra)', 'AWS'
];

const softSkills = [
  'Creative thinking', 'Managerial skills', 'Adaptability', 'Leadership skills', 'Problem-solving', 'Time management', 'Interpersonal skills'
];

function SkillsPage() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Technical Skills</h3>
          <ul className="skills-list">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul className="skills-list">
            {softSkills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
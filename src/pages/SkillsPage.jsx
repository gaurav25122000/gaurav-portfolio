import React from 'react';
import './Skills.css'; // We'll create this CSS file next

// Sample skills data - replace with your actual skills
// You might want to add icons later (e.g., using Font Awesome or Devicon)
const techSkillsData = [
  {name:"Python",category:"Other"},
{name:"Ruby on Rails (ROR)",category:"Other"},
{name:"C",category:"Other"},
{name:"C++",category:"Other"},
{name:"Sanic",category:"Other"},
{name:"Vyked",category:"Other"},
{name:"SQL",category:"Other"},
{name:"MongoDB",category:"Other"},
];

const softSkillsData = [
{name:"Creative thinking",category:"Other"},
{name:"Managerial skills",category:"Other"},
{name:"Adaptability",category:"Other"},
{name:"Leadership",category:"Other"},
{name:"Problem-solving",category:"Other"},
{name:"Time management",category:"Other"},
{name:"Interpersonal skills",category:"Other"},
];
const Skills = () => {
  return (
    <section id="skills" className="skills-section section-padding">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {techSkillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            {/* Optional: Add an icon here later */}
            {/* <i className={`skill-icon ${skill.iconClass}`}></i> */}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <h2 className="section-title">Soft Skills</h2>
      <div className="skills-grid">
        {softSkillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            {/* Optional: Add an icon here later */}
            {/* <i className={`skill-icon ${skill.iconClass}`}></i> */}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

export default Skills;
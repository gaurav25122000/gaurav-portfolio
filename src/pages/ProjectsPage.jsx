import React from 'react';
import './ProjectsPage.css';

const projects = [
  {
    title: 'AI-Powered Launchpad',
    description: 'Won Intra Office AI Powered Launchpad competition.',
    technologies: ['AI', 'Python'],
  },
  {
    title: 'Innovation Express \'21',
    description: 'Recognised as one of the top 10 innovators in "Innovation Express\'21" by TOI.',
    technologies: ['Innovation'],
  }
];

function ProjectsPage() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects & Achievements</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
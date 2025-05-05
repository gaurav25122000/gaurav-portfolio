import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <p>This section showcases personal projects or significant contributions to open-source projects.</p>
      {/* Add your projects here */}
      <div className="project">
        <h3>Project Name Placeholder</h3>
        <p>Brief description of the project and your role.</p>
        <p><strong>Technologies Used:</strong> Tech 1, Tech 2, Tech 3</p>
        {/* <a href="link-to-github-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
      </div>
      {/* Repeat the div.project structure for each project */}
    </section>
  );
}

export default Projects;
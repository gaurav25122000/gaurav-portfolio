import React from 'react';

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <h2>Work Experience</h2>

      <div className="job">
        <h3>Tata 1mg</h3>
        <h4>SDE I <span className="job-dates">(July 2022 - Present)</span></h4>
        <ul>
          {/* Add specific achievements and responsibilities */}
          <li>Developed and maintained microservices contributing to core platform functionality.</li>
          <li>Played a key role in the UHI (Unified Health Interface) initiative integration.</li>
          <li>Managed and optimized systems for user health records, ensuring data integrity and security.</li>
          <li>Utilized technologies like [mention specific tech used, e.g., Python, Sanic, MongoDB].</li>
        </ul>

        <h4>Intern <span className="job-dates">(February 2022 - July 2022)</span></h4>
        <ul>
          <li>Researched and evaluated Python frameworks including Sanic and Vyked for microservice development.</li>
          <li>Created a skeleton microservice template to standardize and accelerate development.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Max Healthcare</h3>
        <h4>Intern <span className="job-dates">(August 2021 - September 2021)</span></h4>
        <ul>
          <li>Received training in offensive and defensive cybersecurity techniques.</li>
          <li>Gained exposure to layered security architectures and principles.</li>
          <li>Acquired hands-on experience with Vulnerability Assessment and Penetration Testing (VAPT) tools and sandboxing environments.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
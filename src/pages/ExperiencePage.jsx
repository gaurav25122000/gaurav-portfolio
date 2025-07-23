import React from 'react';
import './ExperiencePage.css';

const experienceData = [
  {
    company: 'Tata 1mg',
    title: 'SDE II',
    dates: 'July 2022 – Present',
    description: [
      'Architected and developed a microservices-based Unified Health Records (UHI) platform from inception, overseeing its integration with a central patient service to streamline data flow across major systems.',
      'Enhanced patient health management systems by implementing features such as AI-powered test report analysis, digitised prescriptions with e-commerce integration, and a dynamic recommendation pipeline driven by a configurable rule engine, improving patient understanding and engagement.',
      'Led the design and development of a configurable B2B client portal and multi-platform homepage, reducing client onboarding time by 98% (from 5 days to 2 hours) and empowering business teams with self-service customisation capabilities.',
      'Optimized critical APIs, achieving sub-100ms response times, significantly enhancing user experience and application performance.',
    ],
  },
  {
    company: 'Tata 1mg',
    title: 'Intern | Engineering',
    dates: 'February 2022 – July 2022',
    description: [
      'Conducted research on various Python Frameworks, such as Sanic and Vyked',
      'Created Skeleton microservice complete with CRUD APIs',
      'Studied microservice architecture and its utilisation in Tata 1mg environment',
    ],
  },
  {
    company: 'Max Healthcare',
    title: 'Intern',
    dates: 'August 2021 – September 2021',
    description: [
      'Training on various aspects of Offensive and Defensive Security',
      'Exposure to Real Time working of Layered Security ( Firewalls, Secure Networks, End point Security etc)',
      'Hands on Task on VAPT ( Vulnerability Assessment and Penetration Testing) and Sandboxing.',
    ],
  },
];

function ExperiencePage() {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <span className="job-dates">{job.dates}</span>
              <ul>
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;
import React from 'react';
import './SocialWorkPage.css';

const socialWork = [
  {
    organization: 'Kind Beings',
    role: 'Volunteer',
    description: [
      'Boosted the organisation\'s outreach by increasing Instagram followers by 50% and conducting multiple donation drives for the needy',
      'Effectively managed a volunteer team of 12 and over 20 underprivileged children',
      'Successfully organised various events for the children and informative sessions to promote awareness',
    ],
  },
  {
    organization: 'BVCOE-NSS',
    role: 'Volunteer',
    description: [
      'Undertook various programmes regarding social awareness in the adopted villages, college/school campuses and urban slums',
    ],
  },
];

function SocialWorkPage() {
  return (
    <section id="social-work" className="section social-work-section">
      <h2 className="section-title">Social Work</h2>
      <div className="social-work-container">
        {socialWork.map((item, index) => (
          <div key={index} className="social-work-card">
            <h3>{item.organization}</h3>
            <h4>{item.role}</h4>
            <ul>
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialWorkPage;
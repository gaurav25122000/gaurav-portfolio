import React from 'react';
import './AchievementsPage.css';

const achievements = [
  'Won Intra Office AI Powered Launchpad',
  'Recognised as one of the top 10 innovators in "Innovation Express\'21" by TOI',
  'Awarded a $5000 scholarship for winning the Innovation Express Competition, organized by Agastya and Globalshala.',
];

function AchievementsPage() {
  return (
    <section id="achievements" className="section achievements-section">
      <h2 className="section-title">Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">{achievement}</li>
        ))}
      </ul>
    </section>
  );
}

export default AchievementsPage;
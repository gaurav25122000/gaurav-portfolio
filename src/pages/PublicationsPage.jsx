import React from 'react';
import './PublicationsPage.css';

const publications = [
  {
    title: 'A Novel Virtual Medicinal Care Model for Remote Treatments',
    journal: 'Computational Intelligence in Medical Decision Making and Diagnosis',
    date: 'March 2023',
  },
  {
    title: 'A Novel Review On Healthcare Data Encryption Techniques',
    journal: 'International Conference on Innovative Computing and Communications',
    date: 'November 2022',
  },
  {
    title: 'Novel defending and prevention technique for man in the middle attacks in cyber physical networks',
    journal: 'Cyber‐Physical Systems: Foundations and Techniques',
    date: 'July 2022',
  },
  {
    title: 'Reinforcement Technique for Deploying Intelligent Delay Tolerant Network',
    journal: 'Journal of Computational and Theoretical Nanoscience',
    date: 'May 2021',
  },
  {
    title: 'Securing Healthcare Data by Using Blockchain',
    journal: 'Applications of Blockchain in Healthcare',
    date: 'December 2020',
  },
];

function PublicationsPage() {
  return (
    <section id="publications" className="section publications-section">
      <h2 className="section-title">Publications</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <h3>{pub.title}</h3>
            <p className="publication-meta">{pub.journal} | {pub.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PublicationsPage;
import React from 'react';

function Publications() {
  return (
    <section id="publications" className="section publications-section">
      <h2>Publications</h2>
      <ul>
        {/* Add links if available */}
        <li>"A Novel Virtual Medicinal Care Model for Remote Treatments" {/* <a href="#">Link</a> */}</li>
        <li>"A Novel Review On Healthcare Data Encryption Techniques" {/* <a href="#">Link</a> */}</li>
        <li>"Novel defending and prevention technique for man in the middle attacks in cyber physical networks" {/* <a href="#">Link</a> */}</li>
        <li>"Reinforcement Technique for Deploying Intelligent Delay Tolerant Network" {/* <a href="#">Link</a> */}</li>
        <li>"Securing Healthcare Data by Using Blockchain" {/* <a href="#">Link</a> */}</li>
      </ul>
    </section>
  );
}

export default Publications;
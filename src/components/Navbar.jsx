import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/about' },
    { id: 'experience', label: 'Experience', to: '/experience' },
    { id: 'skills', label: 'Skills', to: '/skills' },
    { id: 'projects', label: 'Projects', to: '/projects' },
    { id: 'publications', label: 'Publications', to: '/publications' },
    { id: 'achievements', label: 'Achievements', to: '/achievements' },
    { id: 'social-work', label: 'Social Work', to: '/social-work' },
    { id: 'education', label: 'Education', to: '/education' },
    { id: 'contact', label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GN
        </Link>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <Link to={item.to} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
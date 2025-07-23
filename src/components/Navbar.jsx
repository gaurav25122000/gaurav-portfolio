import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
          Gaurav Narula
        </Link>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <Link to={item.to}>
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
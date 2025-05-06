import React from 'react';
import './Navbar.css'; // Import the CSS we created

const Navbar = () => {
  // For now, let's use placeholder links.
  // Later, these can be updated to scroll to sections or use a router.
  const navItems = [
    { id: 'home', label: 'Home', href: '#hero' }, // Assuming you have a hero/top section
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          Gaurav Narula {/* Or your name/logo text */}
        </a>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
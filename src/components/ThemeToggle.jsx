import React from 'react';
import './ThemeToggle.css'; // We'll create this CSS file next

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <span className="slider round"></span>
      </label>
      <span className="theme-label">{theme === 'dark' ? 'Dark' : 'Light'} Mode</span>
    </div>
  );
}

export default ThemeToggle;
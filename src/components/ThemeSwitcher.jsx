import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeSwitcher.css'; // Import the CSS for styling

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // Determine if the checkbox should be checked (e.g., checked for dark mode)
  const isChecked = theme === 'dark';

  return (
    <div className="theme-switcher-container">
      <label className="theme-switcher">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleTheme}
        />
        <span className="slider">
          <span className="icon sun">☀️</span>
          <span className="icon moon">🌙</span>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher'; // Import the switcher
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills'; // Import the new Skills component
import Projects from './components/Projects';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import SocialWork from './components/SocialWork';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css'
import Navbar from './components/Navbar'; // Import the Navbar


function App() {
  return (
    <div className="portfolio-container">
            <ThemeSwitcher /> {/* Add the switcher component */}
      <Navbar/>
      {/* You might want a Navbar component here later */}
      <main>
        <Home />
        <About />
        <Experience />
        <Skills /> {/* Add the Skills section */}
        <Projects />
        <Publications />
        <Achievements />
        <SocialWork />
        <Education />
        <Contact />
      </main>
      {/* You might want a Footer component here later */}
    </div>
  )
}

export default App

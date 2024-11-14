// components/Navbar.js
'use client'
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState(null);

    const scrollToSection = (sectionId:any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionId);
    };

    return (
      <div className="navbar-container">
        
        {/* Left side: Name */}
        <div className="navbar-name">
          <span className="navbar-name-orange">Ahmed</span>
          <span> Raza</span>
        </div>
  
        {/* Center: Skills, Certifications, Projects */}
        <div className="navbar-links">
          <div 
            onClick={() => scrollToSection('skills')} 
            className={`navbar-link ${activeSection === 'skills' ? 'navbar-link-active' : ''}`}>
            Skills
          </div>
          <div 
            onClick={() => scrollToSection('certifications')} 
            className={`navbar-link ${activeSection === 'certifications' ? 'navbar-link-active' : ''}`}>
            Certifications
          </div>
          <div 
            onClick={() => scrollToSection('projects')} 
            className={`navbar-link ${activeSection === 'projects' ? 'navbar-link-active' : ''}`}>
            Projects
          </div>
        </div>
  
        {/* Right side: Contact Me link */}
        <div 
          onClick={() => scrollToSection('contact')} 
          className="navbar-contact">
          Contact Me
        </div>
      </div>
    );
}

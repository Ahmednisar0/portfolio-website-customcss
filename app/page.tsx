// pages/index.js
'use client'
import { useState } from 'react';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Certifications from '@/components/Certificates';
import Cards from '@/components/Portfoliocards';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import './Home.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId:any) => {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(sectionId);
  };

  return (
    <div> 
      <Navbar />
      <div className="home-container">

        {/* Left Side - Text Content */}
        <section id="main" className="main-section">
          {/* Name */}
          <div className="text-5xl font-bold mb-6">
            <span>Hi,</span>
          </div>
          
          {/* Greeting Text */}
          <h2 className="greeting">
            I'm <span className="name-highlight">Ahmed</span>
          </h2>
          <p className="position-title">A Front-End Developer</p>

          {/* Description */}
          <p className="description">
            I'm passionate about building modern, dynamic websites and applications. I specialize in front-end technologies like React, TypeScript, and Next.js to deliver seamless user experiences and performance optimization.
          </p>

          {/* Buttons */}
          <div className="button-container">
            <div 
                onClick={() => scrollToSection('contact')} 
                className={`contact-button ${activeSection === 'skills' ? 'active' : ''}`}>
              Contact Me
            </div>
            <div 
                onClick={() => scrollToSection('cards')} 
                className={`project-button ${activeSection === 'skills' ? 'active' : ''}`}>
              Projects
            </div>
          </div>
        </section>

        {/* Right Side - Owl Image */}
        <section className="image-section">
          <img
            src="/images/pic.jpeg"
            alt="Owl"
            className="owl-image"
          />
        </section>

      </div>

      <Skills />
      <Certifications />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

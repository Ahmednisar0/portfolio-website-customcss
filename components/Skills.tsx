import './Skills.css'; // Import the custom CSS file
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // React Icons
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDigitalocean } from 'react-icons/si';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Skills Section Heading and Paragraph */}
      <div className="skills-header">
        <h2>Skills</h2>
        <p>More to come! I'll be learning Python to make AI bots, and also improving my skills in UI/UX design.</p>
      </div>

      {/* Skills Grid with Icons and Text on the Right */}
      <div className="skills-grid">
        
        {/* Skill Icons with Text on the Right */}
        <div className="skill-item">
          <FaReact />
          <p>React</p>
        </div>

        <div className="skill-item">
          <FaHtml5 />
          <p>HTML</p>
        </div>

        <div className="skill-item">
          <FaCss3Alt />
          <p>CSS</p>
        </div>

        <div className="skill-item">
          <FaJs />
          <p>JavaScript</p>
        </div>

        <div className="skill-item">
          <SiTypescript />
          <p>TypeScript</p>
        </div>

        <div className="skill-item">
          <SiNextdotjs />
          <p>Next.js</p>
        </div>

        <div className="skill-item">
          <SiTailwindcss />
          <p>Tailwind CSS</p>
        </div>

        <div className="skill-item">
          <SiDigitalocean />
          <p>Digital Marketing</p>
        </div>

      </div>
    </section>
  );
}

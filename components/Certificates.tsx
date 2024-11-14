// components/Certifications.js
import './Certificates.css';

export default function Certifications() {
    return (
      <section id="certifications" className="certifications-section">
        
        {/* Certifications Section Heading */}
        <div className="section-heading">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">More certifications to come. Stay tuned!</p>
        </div>
  
        {/* Certifications Cards */}
        <div className="cards-container">
  
          {/* Card 1: Google AI Essentials */}
          <div className="card">
            <h3 className="card-title">Google AI Essentials</h3>
            <p className="card-text">
              Google AI Essentials is a self-paced course designed to help people across roles and industries get essential AI skills to boost their productivity, zero experience required. The course is taught by AI experts at Google who are working to make the technology helpful for everyone.
            </p>
            <button className="button">View Certificate</button>
          </div>
  
          {/* Card 2: Digital Marketing & E-commerce */}
          <div className="card">
            <h3 className="card-title">Digital Marketing & E-commerce</h3>
            <p className="card-text">
              Throughout this program, you will gain in-demand skills that prepare you for an entry-level job and learn how to use tools and platforms like Canva, Constant Contact, Google Ads, Google Analytics, Hootsuite, HubSpot, Mailchimp, Shopify, and Twitter. You will learn from subject-matter experts at Google and have a chance to build your own portfolio with projects like customer personas and social media calendars to show to potential employers.
              <br /><span className="card-highlight">All of them have been completed. This is a series of 7 courses.</span>
            </p>
            <button className="button">View Certificate</button>
          </div>
  
          {/* Card 3: UX Design Professional Certificate */}
          <div className="card">
            <h3 className="card-title">UX/UI Design Professional Certificate</h3>
            <p className="card-text">
              Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. You will create designs on paper and in digital design tools like Figma. By the end of the certificate program, you will have a professional UX portfolio that includes three end-to-end projects, so that you’re ready to apply for jobs. Upon completion, you can directly apply for jobs with Google and over 150 U.S. employers, including Deloitte, Target, Verizon, and of course, Google.
              <br /><span className="card-highlight">Completed 3 courses so far. This is also a series of 7 courses.</span>
            </p>
            <button className="button">View Certificate</button>
          </div>
  
        </div>
      </section>
    );
  }
  
import './Portfoliocards.css'; // Import the custom CSS file
import Image from 'next/image';
export default function Cards() {
  return (
    <div id="cards" className="cards-section">
      <h2>Portfolio</h2>
      <div className="cards-grid">
        
        {/* Card 1 */}
        <div className="card">
          <Image
            src="/images/griill.png"
            alt="Portfolio Image 1"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="card-body">
            <p className="tech-stack">NextJs | Tailwind CSS</p>
            <p>Grilll n Grind is a concept for an online platform I created to easily order pizzas and burgers. Built using Tailwind CSS, the site features a sleek, user-friendly design.</p>
            <button>View More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <Image
            src="/images/resume.png"
            alt="Portfolio Image 2"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="card-body">
            <p className="tech-stack">HTML | CSS | JAVASCRIPT</p>
            <p>Resume Builder is a tool I made using HTML, CSS, and JavaScript that allows users to easily create and download professional resumes.</p>
            <button>View More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <Image
            src="/images/diner-web-image.png"
            alt="Portfolio Image 3"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="card-body">
            <p className="tech-stack">NextJs | Tailwind CSS</p>
            <p>Diners Builder and Developers is a construction website I built for a client using Next.js and Tailwind CSS. The site features a clean, modern design with easy navigation.</p>
            <button>View More</button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <Image
            src="/images/figmareplica.png"
            alt="Portfolio Image 4"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="card-body">
            <p className="tech-stack">NextJs | Tailwind CSS</p>
            <p>Figma Design is a design concept I created using Next.js and Tailwind CSS. The design features a clean, modern layout with a focus on usability and responsiveness.</p>
            <button>View More</button>
          </div>
        </div>

      </div>
    </div>
  );
}

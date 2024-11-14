// components/Footer.js
import './footer.css';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/yourusername', '_blank');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/yourusername', '_blank');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:youremail@example.com';
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+1234567890';
    };

    const handleGithubClick = () => {
        window.open('https://github.com/yourusername', '_blank');
    };

    return (
        <footer className="footer">
            <div className="footer-icons">
                <div onClick={handleInstagramClick} className="footer-icon">
                    <FaInstagram />
                </div>

                <div onClick={handleLinkedinClick} className="footer-icon">
                    <FaLinkedinIn />
                </div>

                <div onClick={handleEmailClick} className="footer-icon">
                    <FaEnvelope />
                </div>

                <div onClick={handlePhoneClick} className="footer-icon">
                    <FaPhoneAlt />
                </div>

                <div onClick={handleGithubClick} className="footer-icon">
                    <FaGithub />
                </div>
            </div>

            <div className="footer-text">
                <p>&copy; {new Date().getFullYear()} Ahmed Raza. All rights reserved.</p>
            </div>
        </footer>
    );
}

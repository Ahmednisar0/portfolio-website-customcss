// components/Contact.js
import './contact.css';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted!');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-heading">Contact Me</h2>

                <p className="contact-description">
                    You can contact me directly through my phone number at <strong>+923187724180</strong> or via email at <strong>aaza60232@gmail.com</strong>.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="form-label">Contact Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="form-textarea"
                        />
                    </div>

                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="submit-button"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

import React, { useState } from 'react';
import './Contact.css';
import { getDatabase, ref} from 'firebase/database';
import {Link} from 'react-router-dom';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const{ name, email, message } = formData;
        // Perform client-side validation
        
try {
  const database = getDatabase();
  const contactRef = ref(database, 'contacts');
  

  setFormData({
    name: '',
    email: '',
    message: ''
  });

  alert('Done');
} catch (error) {
  console.error('Error', error);
  alert(' failed');
}
};
    return (
        <div className="contact-container">
            <div className="contact-box">
                <div className="contact-info">
                    <h2 className='contheading'>Contact Us</h2>
                    <p>Email: mahakagarwal45@gmail.com</p>
                    <p>Phone: +91 8979493542</p>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="input-field" required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field" required />
                        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="input-field" required></textarea>
                        {formStatus.error && <p className="error">{formStatus.error}</p>}
                        {formStatus.submitted ? (
                            <div className="success-container">
                                <p className="success">Form submitted successfully!</p>
                                {/* Add link to success page */}
                            </div>
                        ) : (
                            <button type="submit" id="btn"><Link to="/">Submit</Link></button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;

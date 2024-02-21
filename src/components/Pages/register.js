import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import emailjs from 'emailjs-com';
import { getDatabase, ref, push } from 'firebase/database';
import './register.css';
import {Link} from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    street: '',
    city: '',
    landmark: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
const sendWelcomeEmail = async () => {
    const templateParams = {
      to_email: formData.email,
      from_name: 'waste2best', // Replace with your name
      from_email: 'recycle@waste2best.com',
    reply_to: 'recycle@waste2best.com',
    subject: 'Welcome To Waste2Best',
      body:` Hello ${formData.name}, Thank you for registering.`,
  };
  try {
    await emailjs.send(
      'service_bvhhbcf',
      'template_otu1tx7',
      templateParams,
      'NZimNB5NcMhvnpaIc'
    );
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
  

  const handleRegister = async (e) => {
    e.preventDefault();
    const{ name, email, password, street, city, landmark, contact } = formData;

try {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const userId = userCredential.user.uid;

  const database = getDatabase();
  const userRef = ref(database,`userDataRecords/${userId}`);
  push(userRef, {
    name,
    email,
    password,
    street,
    city,
    landmark,
    contact,
  });



  setFormData({
    name: '',
    email: '',
    password: '',
    street: '',
    city: '',
    landmark: '',
    contact: '',
  });

  alert('Data stored');
  sendWelcomeEmail();

} catch (error) {
  console.error('Error during registration:', error);
  alert('Registration failed');
}
};


  return (
    <div className="registration-container">
      <h2 className='headreg'>Register</h2>
      <form onSubmit={handleRegister} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="name"
            onChange={handleInputChange}
            required
          />
        </div>

         <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={handleInputChange}
            required
          />
        </div> 

         <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="password"
            onChange={handleInputChange}
            required
          />
        </div> 


        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            placeholder="street"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            placeholder="city"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="landmark">Landmark:</label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            placeholder="landmark"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            placeholder="contact"
            onChange={handleInputChange}
            required
          />
        </div>

        <button onClick={handleRegister} className='btnr'><Link to="/">Register</Link></button>
      </form>
    </div>
  );
};

export default RegistrationPage;
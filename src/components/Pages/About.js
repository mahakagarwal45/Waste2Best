import React from 'react';
import './About.css'; // Import CSS file for styling
import mahakImage from './mahak.jpeg'; // Import the image files
import lavanyaImage from './lavanya.jpg';
import kunikaImage from './kunika.jpeg';

const About = () => {
  return (
    <div className="about-us">
    <br/>
      <h2 className='headingabout'>About Us</h2>
      <p id="aboutpara">
Welcome to Waste2Best, where sustainability meets innovation. Our team is dedicated to reshaping the future of waste management. With a focus on eco-friendly practices, we're on a mission to minimize environmental impact through creative recycling solutions.
At Waste2Best, we believe in the power of collaboration, working closely with communities to promote sustainable living.
From repurposing materials to implementing green technologies, we're committed to creating a more sustainable world for generations to come. Join us in our journey towards a greener future, where every effort counts in preserving our planet's beauty and vitality.
      </p>


      <div className="image-container">
        <div className="image-square" style={{ backgroundImage: `url(${kunikaImage})`}}><h3>Kunika Singh</h3></div>
        <div className="image-square" style={{ backgroundImage:`url(${lavanyaImage})`  }}><h3>Lavanya Pathak</h3></div>
        <div className="image-square" style={{ backgroundImage:`url(${mahakImage})`}}><h3>Mahak Agarwal</h3></div>
      </div>
      <div className="mission-vision">

      <h3>Our Goals: </h3>
      <p>
      Our goal is to pioneer sustainable solutions that address pressing environmental challenges while fostering social and economic development. Aligned with the United Nations Sustainable Development Goals (SDGs), our project is committed to advancing several key initiatives, including:
<br/>
<b>Goal 12:</b> Responsible Consumption and Production - By promoting recycling and waste reduction practices, we aim to minimize environmental impact and promote sustainable consumption patterns.
<br/>
<b>Goal 13:</b> Climate Action - Our project seeks to mitigate climate change by reducing greenhouse gas emissions through innovative waste management strategies and promoting renewable energy sources.
<br/>
<b>Goal 15:</b> Life on Land - We strive to protect, restore, and promote sustainable use of terrestrial ecosystems by advocating for responsible waste disposal and land conservation practices.

        </p><br/>
        <h3>Our Mission: </h3>
        <p>
        At Waste2Best, Our mission is to lead the charge in environmental sustainability by revolutionizing waste management. We are dedicated to transforming discarded materials into innovative and eco-friendly products that not only serve the needs of consumers but also contribute to a healthier planet. Through our commitment to recycling and repurposing, we aim to minimize waste accumulation, reduce environmental degradation, and pave the way for a more sustainable future. Join us in our mission to protect and preserve the environment for generations to come.</p><br/>

        <h3>Our Vision: </h3>
        <p>
        Our vision is to revolutionize the way waste is managed, transforming it into a valuable resource for creating innovative and sustainable products. We envision a future where waste streams are seamlessly integrated into production cycles, reducing environmental impact and fostering a circular economy. By prioritizing recycling, we aim to inspire communities to embrace a more responsible approach to consumption, paving the way for a cleaner, healthier planet for generations to come.</p>
      </div>
      
    </div>
  );
};

export default About;
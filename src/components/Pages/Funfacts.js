import React from 'react';
import './Funfacts.css';

const imageUrls = [
  'https://cdn2.hubspot.net/hubfs/5283141/TakeOurQuiz_Hero.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcF89YVlqKMmbhb29SUclYLrf6Ze7BFvq1w&usqp=CAU',
  'https://recyclingpartnership.org/communitiesforrecycling/wp-content/uploads/sites/5/2021/01/blog-recycling-101-quiz-012921-1000x667-01.jpg',
  
];

const descriptions = [
  'Embark on an eco-adventure: Take this exciting recycling quiz!',
  'Think Green, Quiz Clean: Recycling Challenge Ahead!',
  'Discover Your Eco-Habits: Take the Recycling Quiz,Unveil Your Recycling Persona in Just a Few Clicks',
  
];

const redirectUrls = [
  'https://www.roadrunnerwm.com/blog/recycling-quiz',
  'https://recyclesmartma.org/quiz/',
  'https://www.buzzfeed.com/reductioninmotion/what-type-of-recycler-are-you-fh4oso269t',
  
  
];

const Funfacts = () => {
  const handleContainerClick = (index) => {
    window.location.href = redirectUrls[index];
  };

  return (
    <div className="container1">
      <p id='start'>Embark on a journey through diverse perspectives on recycling with our curated blog collection. From insightful eco-friendly tips to inspiring stories of sustainable living, explore a rich tapestry of articles that showcase the collective effort towards a greener and more conscientious world.🌍🌱♻️📚🌿🌟🌈📰🌳🌞</p>
      <div className="card-grid1">
        {imageUrls.map((imageUrl, index) => (
          <div className="card" key={index} onClick={() => handleContainerClick(index)}>
            <div className="image-container1">
            <img src={imageUrl} alt={`Image ${index + 1}`} />

            </div>
            <div className="description1">
              <p className="description-text1">{descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div><br></br>
      <p>Discover the Serious Impact and Silly Fun of Recycling 🥡 &#x267B;</p>
      <div className='facts'>
      <img src="https://slideplayer.com/8071872/25/images/slide_1.jpg" alt="Description of the image" 
      style={{ width: '750px', height: '550px' }}/>
    </div><br></br>
    <div className='facts'>
  <img src="https://i.pinimg.com/originals/e3/a9/c5/e3a9c5423886a96588d72f3770c35976.png" 
       alt="Description of the image" 
       style={{ width: '750px', height: '550px' }} />
</div><br></br>
<div className='facts'>
  <img src="https://paulscrap.files.wordpress.com/2018/05/aluminum-facts.jpg" 
       alt="Description of the image" 
       style={{ width: '750px', height: '550px' }} />
</div>
 </div>
  );
};

export default Funfacts;
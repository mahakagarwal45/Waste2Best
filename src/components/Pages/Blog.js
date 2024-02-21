import React from 'react';
import './Blog.css';

const imageUrls = [
  'https://www.mianzi.in/cdn/shop/articles/fb37ad41513c00e234ff657315b43045.jpg?v=1685609097',
  'https://www.nspackaging.com/wp-content/uploads/sites/4/2019/03/shutterstock_1492626947.jpg',
  'https://www.clearancesolutionsltd.co.uk/wp-content/uploads/2023/05/recycling-1024x709.jpg',
  'https://images.prismic.io/palmettoblog/ca5236ef-970b-4165-8242-53919833a4bc_why-you-should-recycle-environmental-economic-benefits.jpg?auto=compress,format&rect=0,19,1143,762&w=1200&h=800',
  'https://www.econlib.org/wp-content/uploads/2018/05/recycling-2.jpg',
  'https://www.sbshaustralia.com.au/wp-content/uploads/recycle.jpg',
];

const descriptions = [

  'The Art of Upcycling: Turning Trash Into Treasure',
  'Eco-Conscious Tailgating: Green Practices for Fall Sports Fans',
  'Recycling and Mental Health: The Therapeutic Benefits of Engaging in Recycling Activities',
  'The Impact of Single-Use Plastics and the Call for Recycling',
  'What Happens to Your Recyclables After Leaving Your Curb?',
  'How to improve & increase your recycling',
];

const redirectUrls = [
  'https://recyclenation.com/2023/09/the-art-of-upcycling-turning-trash-into-treasure/',
  'https://recyclenation.com/2023/10/eco-conscious-tailgating-green-practices-for-fall-sports-fans/',
  'https://recyclenation.com/2023/11/recycling-and-mental-health-the-therapeutic-benefits-of-engaging-in-recycling-activities/',
  'https://recyclenation.com/2023/09/the-impact-of-single-use-plastics-and-the-call-for-recycling/',
  'https://recyclenation.com/2023/05/what-happens-to-your-recyclables-after-leaving-your-curb/',
  'https://www.forgerecycling.co.uk/blog/increase-your-recycling/',
];

const Blog = () => {
  const handleContainerClick = (index) => {
    window.location.href = redirectUrls[index];
  };

  return (
    <div className="container">
      <p id='startb'>Embark on a journey through diverse perspectives on recycling with our curated blog collection. From insightful eco-friendly tips to inspiring stories of sustainable living, explore a rich tapestry of articles that showcase the collective effort towards a greener and more conscientious world.</p>
      <div className="card-grid">
        {imageUrls.map((imageUrl, index) => (
          <div className="cardb" key={index} onClick={() => handleContainerClick(index)}>
            <div className="image-container">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
            <div className="description">
              <p className="description-text">{descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
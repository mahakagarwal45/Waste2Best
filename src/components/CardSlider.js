// CardSlider.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardSlider.css';
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// const CardSlider = ({ items }) => {
//   return (
//     <Carousel responsive={responsive}>
//       {items.map((item, index) => (
//         <Link key={index} to={`/details/${item.title.toLowerCase()}/${index + 1}`}>
//           <div className="card">
//             <img src={item.image} alt={item.title} />
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             <button>View More</button>
//           </div>
//         </Link>
//       ))}
//     </Carousel>
//   );
// };
const CardSlider = ({ items }) => {
  return (
    <Carousel responsive={responsive}>
      {items.map((item) => (
        <div key={item.id}  className="card">
          <div className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/details/${item.title.toLowerCase()}/${item.id}`}>
            <button>View More</button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};


export default CardSlider;

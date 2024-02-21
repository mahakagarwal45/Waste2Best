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

const dummyItems = [
  { id: 1, title: 'Glass', description: 'Give glass a second chance: recycle for a greener tomorrow and transform glass into extraordinary.', image: 'https://www.recycleannarbor.org/sites/default/files/2020-11/AdobeStock_231362035_0.jpeg' },
  { id: 2, title: 'Plastics', description: 'Transforming pollution into a promise for a sustainable tomorrow, recycle plastics and save lives', image: 'https://www.howitworksdaily.com/wp-content/uploads/2015/09/plastic-bottles-1024x698.jpg' },
  {id:3, title: 'Paper', description: 'From notebooks to newspapers: Paper waste reborn through recycling, forging sustainability in each fold', image: 'https://www.rubicon.com/wp-content/uploads/2022/01/newspaper-bundles-for-paper-recycling.jpg' },
  {id:4,title: 'Metals and Steels', description: 'Recycling metals and steel: reshaping durability for a sustainable tomorrow', image: 'https://www.zoresrecycling.com/blog/wp-content/uploads/2023/03/Scrap-Metal-Recycling-Company-Indianapolis.jpg' },
  {id:5, title: 'Jute and Jute Items', description: "Embrace sustainability, weave the future: Recycle and reuse jute, nature's versatile gift, for a greener tomorrow.", image: 'https://static.fibre2fashion.com/Newsresource/images/286/jute_298301.jpg' },
  {id:6, title: 'Wheel Tyres', description: 'Rolling into sustainability: Reinventing discarded tires, where rubber meets the road of eco-creativity.', image: 'https://img.freepik.com/premium-photo/dump-old-used-tires-waste-car-tires-recycling-generative-ai_773085-1020.jpg' },
  {id:7, title: 'Wood', description: 'From forest to rebirth: Crafting a sustainable legacy by transforming discarded wood into timeless treasures.', image: 'https://manwithoutcountry.com/wp-content/uploads/2019/01/Pile-of-wood-waste.jpg' },
  {id:8,title: 'Cardboard', description: 'Reusing and recycling cardboard: A simple step towards a greener planet. 🌱📦', image: 'https://media.istockphoto.com/id/183027527/photo/cardboard-boxes.jpg?s=612x612&w=0&k=20&c=ITz_TX3v06wpsJ5DXGCymUa5KZvOFyjuPvWJYA7-Aug=' },
  {id:9, title: 'Clothes', description: 'Threaded with purpose: Unraveling a sustainable tapestry by transforming discarded clothes into a fashion-forward revolution.', image: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D' }
];

const CardSlider = () => {
  return (
    
      <Carousel responsive={responsive}>
        {dummyItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/details/${item.title.toLowerCase()}/${item.id}`}>
              <button>View More</button>
            </Link>
          </div>
        ))}
      </Carousel>
    
  );
};

export { dummyItems, CardSlider };
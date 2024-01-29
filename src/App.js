import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home}  from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Blog } from './components/Pages/Blog';
import { Contact } from './components/Pages/Contact';
// import { Register } from './components/Pages/register';
import Login from "./components/Pages/Login";
import Dashboard from './Dashboard';
import CardSlider from './components/CardSlider';
import GlassDetails from "./components/GlassDetails";
import PlasticDetails from './components/PlasticDetails';


const dummyItems = [
  {id:1, title: 'Glass', description: 'Give glass a second chance: recycle for a greener tomorrow', image: 'https://www.recycleannarbor.org/sites/default/files/2020-11/AdobeStock_231362035_0.jpeg' },
  {id:2, title: 'Plastic', description: 'Transforming pollution into a promise for a sustainable tomorrow', image: 'https://www.howitworksdaily.com/wp-content/uploads/2015/09/plastic-bottles-1024x698.jpg'},
  {id:3, title: 'Paper', description: 'Paper waste reborn through recycling, forging sustainability in each fold', image: 'https://www.rubicon.com/wp-content/uploads/2022/01/newspaper-bundles-for-paper-recycling.jpg' },
  {id:4,title: 'Metals and Steels', description: 'Recycling metals and steel: reshaping durability for a sustainable tomorrow', image: 'https://www.zoresrecycling.com/blog/wp-content/uploads/2023/03/Scrap-Metal-Recycling-Company-Indianapolis.jpg' },
  {id:5, title: 'Electronics ', description: 'Description for item 1', image: 'https://www.fcgov.com/recycling-item-images/img/electronics.jpg' },
  {id:6, title: 'Wheel Tyres', description: 'Description for item 2', image: 'https://img.freepik.com/premium-photo/dump-old-used-tires-waste-car-tires-recycling-generative-ai_773085-1020.jpg' },
  {id:7, title: 'Wood', description: 'Description for item 2', image: 'https://manwithoutcountry.com/wp-content/uploads/2019/01/Pile-of-wood-waste.jpg' },
  {id:8,title: 'Ceramics', description: 'Description for item 1', image: 'https://www.leafscore.com/wp-content/uploads/2021/11/eco-friendly-dinnerware-scaled.jpg' },
  {id:9, title: 'Clothes', description: 'Description for item 2', image: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D' },
  // Add more items as needed
];

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/login" component={Login} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/details/glass/:1" element={<GlassDetails items={dummyItems} />} />
            <Route path="/details/plastic/:2" element={<PlasticDetails items={dummyItems} />} />
          </Routes>
        </div>
        <CardSlider items={dummyItems} />
      </Router>
    </>
  );
}

export default App;
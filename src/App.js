import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Pages/Home';
import  Map  from './components/Pages/Map';
import Blog from './components/Pages/Blog';
import About from './components/Pages/About';
import FunFacts from './components/Pages/Funfacts';
import Contact from './components/Pages/Contact';
import Login from "./components/Pages/Login";
import Register from './components/Pages/register';
import Dashboard from './Dashboard';
import { CardSlider, dummyItems } from './components/CardSlider';
import GlassDetails from "./components/GlassDetails";
import PlasticDetails from './components/Plastic';
import WheelDetails from './components/WheelDetails';
import Clothes from './components/Clothes';
import Wood from './components/WoodDetails';
import SearchResult from './components/Pages/SearchResult';
import Paper from './components/Paper';
import  MetalDetails from './components/MetalDetails';
import Cardboard from './components/Cardboard';
import JuteDetails from './components/Jute';

const handleRegister = async (user) => {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'user.email', // Replace with actual user input
        password: 'user.password', // Replace with actual user input
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    window.location.href = `/search/${searchQuery.toLowerCase()}`;
  };

  return (
    <Router>
      <NavBar onSearch={handleSearch} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="pages">
              <Home />
              <CardSlider />
              <About />
            </div>
          }
        />

        <Route path="/map" element={<div className="pages"><Map /></div>} />
        <Route path="/blog" element={<div className="pages"><Blog /></div>} />
        <Route path="/funfacts" element={<div className="pages"><FunFacts /></div>} />
        <Route path="/contact" element={<div className="pages"><Contact /></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<div className="pages"><Register /></div>} />
        <Route path="/dashboard" element={<div className="pages"><Dashboard /></div>} />
        <Route path="/details/glass/:1" element={<GlassDetails items={dummyItems} />} />
        <Route path="/details/plastics/:2" element={<PlasticDetails items={dummyItems} />} />
        <Route path="/details/Paper/:3" element={<Paper items={dummyItems} />} />
        <Route path="/details/Metals and Steels/:4" element={<MetalDetails items={dummyItems} />} />
        <Route path="/details/Jute and Jute Items/:4" element={<JuteDetails items={dummyItems} />} />
        <Route path="/details/Wheel Tyres/:6" element={<WheelDetails items={dummyItems} />} />
        <Route path="/details/Wood/:7" element={<Wood items={dummyItems} />} />
        <Route path="/details/Cardboard/:8" element={<Cardboard items={dummyItems} />} />
        <Route path="/details/Clothes/:9" element={<Clothes items={dummyItems} />} />
        <Route
          path="/search/:query"
          element={<SearchResult items={dummyItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;


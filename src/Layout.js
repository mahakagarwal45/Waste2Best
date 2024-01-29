// Layout.js
import React from 'react';
import NavBar from './NavBar';
import CardSlider from './CardSlider';
import Login from './components/Pages/Login';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="pages">
        {children}
        <CardSlider />
        <Login/>
      </div>
    </>
  );
};

export default Layout;

import React from 'react';
import './index.css';
import { initializeApp } from 'firebase/app';
import ReactDOM from 'react-dom';
import 'firebase/auth';
import App from './App';
import Login from './components/Pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);


const firebaseConfig = {
    apiKey: "AIzaSyCWPkNWWl1mJqxk5q-Vfp0zaKf1hmiNG8Y",
    authDomain: "waste2best-85b0d.firebaseapp.com",
    projectId: "waste2best-85b0d",
    storageBucket: "waste2best-85b0d.appspot.com",
    messagingSenderId: "406540200873",
    appId: "1:406540200873:web:157322c17c02fd91d432b8",
    measurementId: "G-294VQGYRCN"
};



const app = initializeApp(firebaseConfig);

root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    <Login/>
   
  </>
  );
  



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

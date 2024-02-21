import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  apiKey: "AIzaSyCsUA7rDUjQnDKF86KpbPQ_OHD7YmMFFgE",
  authDomain: "waste2best-e11e5.firebaseapp.com",
  projectId: "waste2best-e11e5",
  storageBucket: "waste2best-e11e5.appspot.com",
  messagingSenderId: "436018174473",
  appId: "1:436018174473:web:2afb6dca5a6c3dab3bb6d8",
  measurementId: "G-HX9VY2JYZX"
};



const app = initializeApp(firebaseConfig);

root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
   
  </>
  );
  





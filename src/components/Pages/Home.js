// import React from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";
// import gif from "../Recycle.gif";
// export const Home = () => {
//   return (
//     <div className="HomeElem" >
//       <div className="left">
//       <img src={gif} alt ="Recycle" className="left" />
//       </div>
        
//       <div className="right">
//       <p>Hey there!<br/> Ready to turn your trash into something awesome?<br/>Our website is like a magic wand for waste –<br/> it helps you transform old stuff into cool new things.<br/> Join us in making a positive impact on the environment, <br/>one recycled item at a time. Small actions, big impact!
//       </p>
//       <div className="buttons-container">
//       <Link to="/login">
//           <button className="login-button">Login</button>
//       </Link>
//           <button className="register-button">Register</button>
//         </div>
//        </div>
//       </div>
//   );
// };


// Home.js

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import gif from "../environment.png";

export const Home = () => {
  return (
    <div className="HomeElem">
      <div className="left">
        <img src={gif} alt="Recycle" className="left" />
      </div>

      <div className="right">
        <p>Hey there!<br/> Ready to turn your trash into something awesome?<br/>Our website is like a magic wand for waste –<br/> it helps you transform old stuff into cool new things.<br/> Join us in making a positive impact on the environment, <br/>one recycled item at a time. Small actions, big impact!
        </p>
        <div className="buttons-container">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/register">
          <button className="register-button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};



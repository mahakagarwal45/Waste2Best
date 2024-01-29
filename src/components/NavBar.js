// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";
// import icon from "./search.png";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen} from "./Icons";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             <span>Waste2Best</span>
//             {/* <i className="fas fa-code"></i> */}
//             <span className="icon">
//               <CodeIcon />
//             </span>
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>

//           <div className="search-box">
//             <input type="text" placeholder="Search" />
//             <span className="icon">
//               {/* <SearchIcon /> */}
//               <img src={icon} alt="Icon"/>
//             </span>
//           </div>

//           <div className="nav-icon" onClick={handleClick}>
//             {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

//             {click ? (
//               <span className="icon">
//                 <HamburgetMenuOpen />{" "}
//               </span>
//             ) : (
//               <span className="icon">
//                 <HamburgetMenuClose />
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;

// NavBar.js
// NavBar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import icon from "./search.png";
import { CodeIcon, HamburgetMenuOpen, HamburgetMenuClose } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Waste2Best</span>
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="search-box">
            <input type="text" placeholder="Search" />
            <span className="icon">
              <img src={icon} alt="Icon" />
            </span>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

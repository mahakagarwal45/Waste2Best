import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import icon from "./search.png";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar({ onSearch, setSearchQuery }) {
  const [click, setClick] = useState(false);
  const [searchQueryLocal, setSearchQueryLocal] = useState('');

  const handleClick = () => setClick(!click);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Dynamically redirect to the search result page based on the search query
      const lowercaseQuery = searchQueryLocal.toLowerCase();
      window.location.href = `/search/${lowercaseQuery}`;
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span className="title"> Waste2Best </span>
              {/* <CodeIcon /> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/map"
                className="nav-links"
                onClick={handleClick}
              >
                Recycling Centers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/funfacts"
                className="nav-links"
                onClick={handleClick}
              >
              FunFacts & Quizzes
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
            <input
              type="text"
              placeholder="Search the category"
              value={searchQueryLocal}
              onChange={(e) => setSearchQueryLocal(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className="icon" onClick={onSearch}>
              <img src={icon} alt="Icon" />
            </span>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

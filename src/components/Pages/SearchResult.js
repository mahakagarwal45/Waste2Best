// SearchResult.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css'; // Import the CSS file

const SearchResult = ({ items }) => {
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(window.location.pathname.split('/').pop())
  );

  return (
    <div className="container">
      <h2>Search Results</h2>
      {filteredItems.map((item) => (
        <div className="item" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Link to={`/details/${item.title.toLowerCase()}/${item.id}`}>
            <button>View More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;

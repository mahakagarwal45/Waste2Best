// PlasticDetails.js
import React from 'react';

const PlasticDetails = ({ items }) => {
  // Assuming you want to show details of the first item for now
  const selectedItem = items[1];

  return (
    <div>
      <h2>{selectedItem.title} Details</h2>
      <img src={selectedItem.image} alt={selectedItem.title} />
      <p>{selectedItem.description}</p>
      <h3>Plastic-Specific Details</h3>
      <p>Specific details for Plastic items go here...</p>
    </div>
  );
};

export default PlasticDetails;

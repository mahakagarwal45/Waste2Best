// // GlassDetails.js
// import React from 'react';

// const GlassDetails = ({ items }) => {
//   // Assuming you want to show details of the first item for now
//   const selectedItem = items[0];

//   return (
//     <div>
//       <h2>{selectedItem.title} Details</h2>
//       <img src={selectedItem.image} alt={selectedItem.title} />
//       <p>{selectedItem.description}</p>
//       <h3>Glass-Specific Details</h3>
//       <p>Specific details for glass items go here...</p>
//     </div>
//   );
// };

// export default GlassDetails;

// GlassDetails.js
// import React from 'react';
// // import Navbar from './NavBar';
// import './GlassDetails.css';

// const GlassDetails = ({ items }) => {
//   // Assuming you want to show details of the first item for now
//   const selectedItem = items[0];

//   return (
//     <>
//     {/* <Navbar/> */}
//     <div>
//       <h2>{selectedItem.title} Details</h2>
//       <img src={selectedItem.image} alt={selectedItem.title} />
//       <p>{selectedItem.description}</p>
//       <h3>Glass-Specific Details</h3>
//       <p>Specific details for glass items go here...</p>

//       {/* New section for Glass reuse */}
//       <h3>Glass Reuse Information</h3>
//       <p>
//         Glass is a highly reusable material that can be recycled multiple times
//         without losing its quality. Consider the following points for glass reuse:
//       </p>
//       <ul>
//         <li>Glass can be recycled into new containers or used for various applications.</li>
//         <li>When recycling glass, it helps reduce the demand for new raw materials.</li>
//         <li>Encourage proper glass disposal to support recycling initiatives.</li>
//       </ul>
//     </div>
//     </>
//   );
// };

// export default GlassDetails;

import React from 'react'

const GlassDetails = () => {
  return (
    <div>
      <h3>Glass</h3>
    </div>
  )
}

export default GlassDetails

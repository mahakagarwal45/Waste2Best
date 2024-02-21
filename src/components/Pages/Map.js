
// import React, { useEffect, useRef, useState } from 'react';
// import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
// import "./Map.css";
// const Map = () => {
//   const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
//   const mapContainerStyle = {
//     width: '80%',
//     height: '500px',
//     margin: 'auto'
//   };

//   const center = {
//     lat: userLocation.lat,
//     lng: userLocation.lng,
//   };

//   const mapOptions = {
//     disableDefaultUI: true,
//   };

//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Get user's location and set map center
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ lat: latitude, lng: longitude });

//           // Check if mapRef.current is not null before calling panTo
//           if (mapRef.current) {
//             mapRef.current.panTo({ lat: latitude, lng: longitude });
//           }
//         },
//         (error) => {
//           console.error('Error getting user location:', error);
//         }
//       );
//     }
//   }, []);

//   return (
//     <div>
//     <p className='MapPara'>
//     "Locate nearby recycling centers with ease. Our map helps you find eco-friendly options in your area, making sustainable choices simpler for a greener planet."
//       </p>

//     <LoadScript
//       googleMapsApiKey="AIzaSyBgLcPOIjFM5glTL7rnkTyCL80izuiLzy0"
//       libraries={['places']}
//     >
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={14}
//         options={mapOptions}
//         onLoad={(map) => {
//           mapRef.current = map;
//         }}
//       >
//         {/* Marker for user's current location */}
//         <Marker position={userLocation} />
//         {/* Add more markers for recycling centers, NGOs, schools, etc. */}
//       </GoogleMap>
//     </LoadScript>
//     </div>
//   );
// };

// export default Map;



























import React, { useEffect, useRef, useState } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import "./Map.css";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null); // Initialize userLocation as null initially
  const mapContainerStyle = {
    width: '75%',
    height: '600px',
    margin: 'auto'
  };

  const mapOptions = {
    disableDefaultUI: true,
  };

  const mapRef = useRef(null);

  useEffect(() => {
    // Get user's location and set map center
    const getUserLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    };

    getUserLocation();
  }, []);

  return (
    <div>
      <p className='MapPara' >
        Locate nearby recycling centers with ease. Our map helps you find eco-friendly options in your area, making sustainable choices simpler for a greener planet.
      </p>

      {userLocation && ( // Render map only when userLocation is available
        <LoadScript
          googleMapsApiKey="AIzaSyBgLcPOIjFM5glTL7rnkTyCL80izuiLzy0"
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation}
            zoom={14}
            options={mapOptions}
            onLoad={(map) => {
              mapRef.current = map;
            }}
          >
            {/* Marker for user's current location */}
            <Marker position={userLocation} />
            {/* Add more markers for recycling centers, NGOs, schools, etc. */}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Map;

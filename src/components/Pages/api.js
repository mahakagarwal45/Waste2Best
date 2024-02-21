// api.js

import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getRecyclingCenters = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`);
    // Replace this with your actual endpoint or API URL for recycling centers
    return response.data.slice(0, 5); // Return a subset of data for simplicity
  } catch (error) {
    console.error('Error fetching recycling centers:', error);
    return [];
  }
};

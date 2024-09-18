import axios from 'axios';

// Set up the base URL for your API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Update the URL as needed

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Optional: set a timeout for requests
});

// Example of a GET request
export const fetchData = async () => {
  try {
    const response = await apiClient.get('/api/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Example of a POST request
export const postData = async (data) => {
  try {
    const response = await apiClient.post('/api/data', data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// You can add more API functions as needed

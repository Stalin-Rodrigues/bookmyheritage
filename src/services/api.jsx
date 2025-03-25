// src/services/api.js
const API_BASE_URL = 'https://bookmyheritageapi.onrender.com';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};

export const fetchHeritageSites = async () => {
  const response = await fetch(`${API_BASE_URL}/heritage-sites`);
  return handleResponse(response);
};

export const fetchHeritageSiteById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/heritage-sites/${id}`);
  return handleResponse(response);
};

export const createBooking = async (bookingData) => {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  return handleResponse(response);
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await handleResponse(response);
  localStorage.setItem('authToken', data.token); // Store token
  return data;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};
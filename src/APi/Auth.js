// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://untitled-twkmuar27a-uc.a.run.app/api/login/';

export const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

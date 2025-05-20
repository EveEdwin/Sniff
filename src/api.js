import axios from 'axios';
import { BASE_URL } from './constants/config';

export const fetchFeatures = async () => {
  console.log(BASE_URL);
  const response = await axios.get(`${BASE_URL}/api/features`);
  return response.data;
};

export const fetchSuccessStories = async () => {
  const response = await axios.get(`${BASE_URL}/success-stories`);
  return response.data;
};

export const fetchEvents = async () => {
  const response = await axios.get(`${BASE_URL}/events`);
  return response.data;
};

export const fetchCommunityPosts = async () => {
  const response = await axios.get(`${BASE_URL}/community`);
  return response.data;
};
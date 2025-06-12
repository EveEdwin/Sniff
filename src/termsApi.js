import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${BASE_URL}terms`;

export const getTerms = () => axios.get(API_URL);
export const createTerm = (data) => axios.post(API_URL, data);
export const updateTerm = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTerm = (id) => axios.delete(`${API_URL}/${id}`);

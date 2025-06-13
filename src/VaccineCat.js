import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${BASE_URL}VaccineCat`;

export const getHomes = () => axios.get(API_URL);
export const createHome = (data) => axios.post(API_URL, data);
export const updateHome = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteHome = (id) => axios.delete(`${API_URL}/${id}`);

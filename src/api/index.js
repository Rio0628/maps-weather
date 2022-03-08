import axios from 'axios';

const URL = process.env.API_URL || 'http://localhost:8080';

const http = axios.create({
    baseURL: URL,
    headers: { 'Content-type': 'application/json'}
})

export const createLoc = data => http.post('/api/locations', data);
export const getAllLocs = () => http.get('/api/locations');
export const deleteLoc = id => http.delete(`/api/locations/${id}`);
export const updateLoc = (id, data) => http.put(`/api/locations/${id}`, data);
    
const apis = { createLoc, getAllLocs, deleteLoc, updateLoc }; 

export default apis;
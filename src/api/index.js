import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: { 'Content-type': 'application/json'}
})

export const createLoc = data => http.post('/locations', data);
export const getAllLocs = () => http.get('/locations');
export const deleteLoc = id => http.delete(`/locations/${id}`);
export const updateLoc = (id, data) => http.put(`/locations/${id}`, data);
    
const apis = { createLoc, getAllLocs, deleteLoc, updateLoc }; 

export default apis;
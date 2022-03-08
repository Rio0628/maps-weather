import axios from 'axios';

export const createLoc = data => axios.post('/api/locations', data);
export const getAllLocs = () => axios.get('/api/locations');
export const deleteLoc = id => axios.delete(`/api/locations/${id}`);
export const updateLoc = (id, data) => axios.put(`/api/locations/${id}`, data);
    
const apis = { createLoc, getAllLocs, deleteLoc, updateLoc }; 

export default apis;
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
});


export const fetchfirstpage=async()=>api.get('/api/firstpages');
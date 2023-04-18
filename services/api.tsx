import axios from 'axios';

console.log(
  '🚀 ~ file: api.tsx:6 ~ process.env.NEXT_PUBLIC_API_BASE_URL:',
  process.env.NEXT_PUBLIC_API_BASE_URL
);
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default instance;

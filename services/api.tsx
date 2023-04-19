import axios from 'axios';
console.log('🙂 process.env.NEXT_PUBLIC_API_BASE_URL: ', process.env.NEXT_PUBLIC_API_BASE_URL)
const instance = axios.create({
  baseURL: '${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/',
});
console.log('🙂 instance: ', instance)
export default instance;

import api from './api';

export async function signUp(email: string, password: string) {
  const response = await api.post('/users', { email, password });
  return response.data;
}
//

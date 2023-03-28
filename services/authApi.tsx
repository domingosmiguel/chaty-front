import api from './api';

export async function signIn(email: string, password: string) {
  const response = await api.post('/auth/signIn', { email, password });
  return response.data;
}
//

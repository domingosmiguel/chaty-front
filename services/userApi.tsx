import api from './api';

export async function signUp(
  email: string,
  username: string,
  password: string
) {
  const response = await api.post('/users', { email, username, password });
  return response.data;
}
//

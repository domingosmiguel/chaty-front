import api from './api';

export async function signUp(
  email: string,
  username: string,
  password: string
) {
  const response = await api.post('/users', { email, username, password });
  return response.data;
}

export async function getUsers(
  username: string,
  token: string
): Promise<UsersSearch[] | null> {
  try {
    const response = await api.get(`/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

export type UsersSearch = {
  username: string;
  pictureUrl: string;
  entityId: number;
};

import useAsync from '../useAsync';

import * as userApi from '@/services/userApi';

export default function useUsers() {
  const {
    loading: usersLoading,
    error: usersError,
    act: getUsers,
  } = useAsync(userApi.getUsers, { immediate: false });

  return {
    usersLoading,
    usersError,
    getUsers,
  };
}

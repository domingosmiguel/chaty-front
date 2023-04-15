import useLocalStorage from '@/hooks/api/useLocalStorage';
import React, { createContext } from 'react';

const userContext = createContext<UserContextType>({
  userData: undefined,
  setUserData: () => {},
});

export default userContext;

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useLocalStorage('userData', {
    user: {
      id: 0,
      username: '',
      pictureUrl: '',
      entityId: 0,
    },
    token: '',
  });

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
}

export type UserContextType = {
  userData?: SignInResult;
  setUserData: (userData: SignInResult) => void;
};

type SignInResult = {
  user: GetUserOrFailResult;
  token: string;
};

type GetUserOrFailResult = {
  id: number;
  username: string;
  pictureUrl: string;
  entityId: number;
};

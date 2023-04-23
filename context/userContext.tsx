import useLocalStorage from '@/hooks/api/useLocalStorage';
import React, { createContext } from 'react';

const userContext = createContext<UserContextType>({
  userData: null,
  setUserData: (userData: SignInResult | null) => {},
});

export default userContext;

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useLocalStorage<SignInResult | null>(
    'userData',
    null
  );

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
}

export type UserContextType = {
  userData: SignInResult | null;
  setUserData: (userData: SignInResult | null) => void;
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

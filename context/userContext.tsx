import useLocalStorage from '@/hooks/api/useLocalStorage';
import React, { createContext } from 'react';

const userContext = createContext<UserContextType>({
  userData: Object,
  setUserData: (userData) => console.warn('no user data provider'),
});
export default userContext;

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useLocalStorage('userData', {});

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
}

export type UserContextType = {
  userData: Object;
  setUserData: (userData: Object) => void;
};

import { useState } from 'react';

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | null
): [T | null, (value: T | null) => void] {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | null) => {
    try {
      const valueToStore =
        value instanceof Function
          ? (value as (val: T | null) => T)(storedValue)
          : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

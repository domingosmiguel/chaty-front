import { useState } from 'react';

export default function useForm<T>(
  initialValue: T
): [T, (target: EventTarget & HTMLInputElement) => void, () => void] {
  const [form, setForm] = useState(initialValue);

  const updateForm = (target: EventTarget & HTMLInputElement) => {
    if (typeof target.name === 'string') {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const clearForm = () => {
    setForm(initialValue);
  };

  return [form, updateForm, clearForm];
}

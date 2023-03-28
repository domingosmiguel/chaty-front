import { InputHTMLAttributes, useState } from 'react';

export default function useForm<T>(initialValue: T) {
  const [form, setForm] = useState(initialValue);

  const updateForm = (target: InputHTMLAttributes<HTMLInputElement>) => {
    if (typeof target.name === 'string') {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  return [form, updateForm];
}

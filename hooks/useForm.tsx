import { InputHTMLAttributes, useState } from 'react';

export default function useForm(initialValue: Object) {
  const [form, setForm] = useState(initialValue);

  const updateForm = (target: InputHTMLAttributes<HTMLInputElement>) => {
    setForm({ ...form, [target.name as string]: target.value });
  };

  return [form, updateForm];
}

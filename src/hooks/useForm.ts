import { useState } from 'react';

interface IUseFormProps {
  (todo: string): void;
}

export const useForm = (addItem: IUseFormProps) => {
  const [todoBox, setTodoBox] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoBox.trim()) {
      addItem(todoBox);
      setTodoBox('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoBox(e.target.value);
  };

  return { todoBox, handleSubmit, handleChange };
};

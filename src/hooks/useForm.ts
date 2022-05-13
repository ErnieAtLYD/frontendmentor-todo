import {useState} from 'react';
import {ActionProps} from '../interfaces';

export const useForm = (dispatch: React.Dispatch<ActionProps>) => {
  const [todoBox, setTodoBox] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoBox.trim()) {
      dispatch({type: 'ADD_TODO', payload: todoBox});
      setTodoBox('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoBox(e.target.value);
  };

  return {todoBox, handleSubmit, handleChange};
};

import { useState } from 'react';
import styled from 'styled-components';
import Hidden from './Hidden';

interface IFormSectionProps {
  addItem: (todo: string) => void;
}

const HiddenButton = styled(Hidden)``;

const Form = styled.form`
  border-radius: 5px;
  box-shadow: var(--list-shadow);
  height: 3rem;
  margin-bottom: 1rem;

  &:before {
    border: 2px solid var(--list-item-border-color);
    border-radius: 50%;
    content: '';
    height: 1.25rem;
    margin: 0.75rem 1.25rem;
    position: absolute;
    width: 1.25rem;
  }

  @media (min-width: 23.5rem) {
    height: 4rem;
    &:before {
      width: 1.5rem;
      height: 1.5rem;
      margin: 1rem 1.5rem;
    }
  }
`;

const TextBoxWrapper = styled.div`
  display: flex;
  height: 100%;
  border-radius: 5px;
`;

const TextBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Create a new todo...',
  name: 'todo',
})`
  background-color: var(--list-item-bg-color);
  border: 0;
  border-radius: 5px;
  color: var(--list-item-color);
  font-size: 0.75rem;
  height: 100%;
  line-height: 0.75rem;
  letter-spacing: -0.17px;
  padding: 0;
  padding-left: 4.375rem;
  width: calc(99% - 4rem);

  ::-webkit-input-placeholder {
    color: var(--placeholder-color);
  }

  @media (min-width: 23.5rem) {
    font-size: 1.125rem;
    line-height: 1.125rem;
    letter-spacing: -0.25px;
  }
`;

function FormSection({ addItem }: IFormSectionProps) {
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

  return (
    <Form onSubmit={handleSubmit}>
      <TextBoxWrapper>
        <TextBox name="todo" value={todoBox} onChange={handleChange} />
      </TextBoxWrapper>
      <HiddenButton type="submit">Add</HiddenButton>
    </Form>
  );
}

export default FormSection;

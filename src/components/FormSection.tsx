import styled from 'styled-components';
import { BodyText } from './atoms/typography';
import { useForm } from '../hooks/useForm';
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

const TextBox = styled(BodyText)`
  background-color: var(--list-item-bg-color);
  border: 0;
  border-radius: 5px;
  color: var(--list-item-color);
  height: 100%;
  padding: 0;
  padding-left: 4.375rem;
  width: calc(99% - 4rem);

  ::-webkit-input-placeholder {
    color: var(--placeholder-color);
  }
`;

function FormSection({ addItem }: IFormSectionProps) {
  const { todoBox, handleChange, handleSubmit } = useForm(addItem);

  return (
    <Form onSubmit={handleSubmit}>
      <TextBoxWrapper>
        <TextBox
          as="input"
          type="text"
          name="todo"
          placeholder="Create a new todo..."
          value={todoBox}
          onChange={handleChange}
        />
      </TextBoxWrapper>
      <HiddenButton type="submit">Add</HiddenButton>
    </Form>
  );
}

export default FormSection;

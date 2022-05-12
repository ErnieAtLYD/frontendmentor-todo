import { useForm } from '../../hooks/useForm';
import { Form, HiddenButton, TextBox, TextBoxWrapper } from './styles';

interface IFormSectionProps {
  addItem: (todo: string) => void;
}

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

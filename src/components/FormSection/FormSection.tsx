import { useForm } from '../../hooks/useForm';
import { Form, HiddenButton, TextBox, TextBoxWrapper } from './styles';
import { ActionProps } from '../../interfaces';

interface IFormSectionProps {
  dispatch: React.Dispatch<ActionProps>;
}

function FormSection({ dispatch }: IFormSectionProps) {
  const { todoBox, handleChange, handleSubmit } = useForm(dispatch);

  return (
    <Form onSubmit={handleSubmit}>
      <TextBoxWrapper>
        <TextBox
          as='input'
          type='text'
          name='todo'
          placeholder='Create a new todo...'
          value={todoBox}
          onChange={handleChange}
        />
      </TextBoxWrapper>
      <HiddenButton type='submit'>Add</HiddenButton>
    </Form>
  );
}

export default FormSection;

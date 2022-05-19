import {useContext} from 'react';
import {useForm} from '../../hooks/useForm';
import {Form, HiddenButton, TextBox, TextBoxWrapper} from './styles';
import {TodoAppContext} from '../../contexts/TodoAppContext';

function FormSection() {
  const {dispatch} = useContext(TodoAppContext);
  const {todoBox, handleChange, handleSubmit} = useForm(dispatch);

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

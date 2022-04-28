import styled from 'styled-components';

interface IFormSectionProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  todoBox: string;
}

const HiddenButton = styled.button.attrs({ type: 'submit' })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Form = styled.form`
  background: #fff;
  height: 4rem;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-bottom: 1rem;

  &:before {
    content: '';
    border: 2px #ddd solid;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem 1.5rem;
    position: absolute;
  }
`;

const TextBoxWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const TextBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Create a new todo...',
  name: 'todo',
})`
  color: #393a4b;
  height: 100%;
  border: 0;
  padding: 0;
  font-size: 1.125rem;
  line-height: 1.125rem;
  letter-spacing: -0.25px;
  width: calc(99% - 4rem);
  padding-left: 4.375rem;

  ::-webkit-input-placeholder {
    color: #9495a5;
  }
`;

function FormSection({
  handleChange,
  handleSubmit,
  todoBox,
}: IFormSectionProps) {
  return (
    <Form onSubmit={handleSubmit}>
      <TextBoxWrapper>
        <TextBox name='todo' value={todoBox} onChange={handleChange} />
      </TextBoxWrapper>
      <HiddenButton aria-hidden='true'>Add</HiddenButton>
    </Form>
  );
}

export default FormSection;

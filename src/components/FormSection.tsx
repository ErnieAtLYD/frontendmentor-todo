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
  height: 3rem;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-bottom: 1rem;

  &:before {
    content: '';
    border: 2px solid ${({ theme }) => theme.listItemBorderColor};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.75rem 1.25rem;
    position: absolute;
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
  color: ${({ theme }) => theme.listItemColor};
  height: 100%;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.listItemBgColor};
  padding: 0;
  font-size: 0.75rem;
  line-height: 0.75rem;
  letter-spacing: -0.17px;
  width: calc(99% - 4rem);
  padding-left: 4.375rem;

  ::-webkit-input-placeholder {
    color: #9495a5;
  }

  @media (min-width: 23.5rem) {
    font-size: 1.125rem;
    line-height: 1.125rem;
    letter-spacing: -0.25px;
    padding-left: 4.375rem;
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

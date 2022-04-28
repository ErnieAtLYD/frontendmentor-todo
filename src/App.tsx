import React, { useState } from 'react';
import Header from './components/Header';
import FormSection from './components/FormSection';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './helpers/themes';
import { useTodoList } from './hooks/useTodoList';
import ListSection from './components/ListSection';

const ContainerWrapper = styled.main`
  max-width: 33.75rem;
  margin: 0 auto;
`;

const FootnoteWrapper = styled.footer`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.875rem;
  text-align: center;
  letter-spacing: -0.194444px;
  margin-top: 3.0625rem;
  color: #9495a5;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('all');
  const [todoBox, setTodoBox] = useState<string>('');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // custom hooks
  const { items, addItem, deleteItem, removeCompleted, toggleCheckbox } =
    useTodoList();

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ContainerWrapper>
        <Header switchTheme={switchTheme} />
        <FormSection
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          todoBox={todoBox}
        />
        <ListSection
          items={items}
          deleteItem={deleteItem}
          toggleCheckbox={toggleCheckbox}
          removeCompleted={removeCompleted}
          filter={filter}
          setFilter={setFilter}
        />
        <FootnoteWrapper>Drag and drop to reorder list</FootnoteWrapper>
      </ContainerWrapper>
    </ThemeProvider>
  );
}

export default App;

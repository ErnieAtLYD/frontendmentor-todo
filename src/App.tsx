import { useState } from 'react';
import Header from './components/Header';
import FormSection from './components/FormSection';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './helpers/themes';
import { useTodoList } from './hooks/useTodoList';
import ListSection from './components/ListSection';

const BodyWrapper = styled.div`
  background-image: var(--bg-mobile);
  background-repeat: no-repeat;
  background-position: top center;

  @media (min-width: 23.5rem) {
    background-image: var(--bg-desktop);
  }
`;

const ContainerWrapper = styled.main`
  max-width: 20.4375rem;
  margin: 0 auto;

  @media (min-width: 23.5rem) {
    max-width: 33.75rem;
  }
`;

const FootnoteWrapper = styled.footer`
  color: ${({ theme }) => theme.deleteIconColor};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.875rem;
  letter-spacing: -0.194444px;
  margin-top: 3.0625rem;
  text-align: center;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // custom hooks
  const {
    items,
    addItem,
    deleteItem,
    removeCompleted,
    toggleCheckbox,
    setItems,
  } = useTodoList();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BodyWrapper>
        <ContainerWrapper>
          <Header switchTheme={switchTheme} />
          <FormSection addItem={addItem} />
          <ListSection
            items={items}
            setItems={setItems}
            deleteItem={deleteItem}
            toggleCheckbox={toggleCheckbox}
            removeCompleted={removeCompleted}
          />
          <FootnoteWrapper>Drag and drop to reorder list</FootnoteWrapper>
        </ContainerWrapper>
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;

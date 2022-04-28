import styled, { useTheme } from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
`;

const BrandTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.9375rem;
  color: #fff;
`;

const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  vertical-align: middle;
`;

interface HeaderProps {
  switchTheme: () => void;
}

const Header = ({ switchTheme }: HeaderProps) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <HeaderWrapper>
      <BrandTitle>ToDo</BrandTitle>
      <ButtonWrapper onClick={switchTheme}>{theme.darkModeIcon}</ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;

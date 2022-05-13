import styled, {useTheme} from 'styled-components';
import {HeaderText} from './atoms/typography';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;

  @media (min-width: 23.5rem) {
    padding-top: 4.375rem;
  }
`;

const BrandTitle = styled(HeaderText)`
  color: #fff;
  text-transform: uppercase;
`;

const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  /* FIXME: mobile should be 20px not 26px */
`;

interface HeaderProps {
  switchTheme: () => void;
}

const Header = ({switchTheme}: HeaderProps) => {
  const theme = useTheme();
  return (
    <HeaderWrapper>
      <BrandTitle>ToDo</BrandTitle>
      <ButtonWrapper onClick={switchTheme}>{theme.darkModeIcon}</ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;

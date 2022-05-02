import styled, { useTheme } from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;

  @media (min-width: 23.5rem) {
    padding-top: 4.375rem;
  }
`;

const BrandTitle = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.75rem;
  color: #fff;

  @media (min-width: 23.5rem) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.9375rem;
  }
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

const Header = ({ switchTheme }: HeaderProps) => {
  const theme = useTheme();
  return (
    <HeaderWrapper>
      <BrandTitle>ToDo</BrandTitle>
      {/* FIXME: improve accessiblity of darkmode switch */}
      <ButtonWrapper aria-hidden="true" onClick={switchTheme}>
        {theme.darkModeIcon}
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;

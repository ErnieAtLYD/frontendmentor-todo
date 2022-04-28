import { createGlobalStyle, DefaultTheme } from 'styled-components';
import bgDesktopLight from '../images/bg-desktop-light.jpg';
import bgDesktopDark from '../images/bg-desktop-dark.jpg';
import { ReactComponent as IconMoon } from '../images/icon-moon.svg';
import { ReactComponent as IconSun } from '../images/icon-sun.svg';

// see ./styled.d.ts

export const darkTheme: DefaultTheme = {
  bgColor: '#171823',
  bgDesktop: `url(${bgDesktopDark})`,
  darkModeIcon: <IconSun />,
  listItemBgColor: '#25273D',
  listItemBorderColor: '#393A4B',
  listItemColor: '#C8CBE7',
  strikeThruColor: '#4D5067',
  placeholderColor: '#767992',
  deleteIconColor: '#5B5E7E', // FIXME
  listShadow: 'rgba(0, 0, 0, 0.5)',
};

export const lightTheme: DefaultTheme = {
  bgColor: '#fafafa',
  bgDesktop: `url(${bgDesktopLight})`,
  darkModeIcon: <IconMoon />,
  listItemBgColor: '#fff',
  listItemBorderColor: '#e3e4f1',
  listItemColor: '#494c6b',
  strikeThruColor: '#d1d2da',
  placeholderColor: '#9495a5',
  deleteIconColor: '#5B5E7E', // FIXME
  listShadow: 'rgba(194, 195, 214, 0.5)',
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color:${({ theme }) => theme.bgColor};

    background-image: ${({ theme }) => theme.bgDesktop};
    background-position: top center;
    background-repeat: no-repeat;
  }
`;

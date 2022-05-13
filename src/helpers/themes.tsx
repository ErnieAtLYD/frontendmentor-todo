import {createGlobalStyle, DefaultTheme} from 'styled-components';
import bgDesktopLight from '../images/bg-desktop-light.jpg';
import bgMobileLight from '../images/bg-mobile-light.jpg';
import bgDesktopDark from '../images/bg-desktop-dark.jpg';
import bgMobileDark from '../images/bg-mobile-dark.jpg';
import {ReactComponent as IconMoon} from '../images/icon-moon.svg';
import {ReactComponent as IconSun} from '../images/icon-sun.svg';

// see ./styled.d.ts

export const darkTheme: DefaultTheme = {
  bgColor: '#171823',
  bgDesktop: `url(${bgDesktopDark})`,
  bgMobile: `url(${bgMobileDark})`,
  darkModeIcon: <IconSun />,
  listItemBgColor: '#25273D',
  listItemBorderColor: '#393A4B',
  listItemColor: '#C8CBE7',
  strikeThruColor: '#4D5067',
  placeholderColor: '#767992',
  deleteIconColor: '#5B5E7E',
  listShadow: '0px 35px 50px -15px rgba(0, 0, 0, 0.5)',
};

export const lightTheme: DefaultTheme = {
  bgColor: '#fafafa',
  bgDesktop: `url(${bgDesktopLight})`,
  bgMobile: `url(${bgMobileLight})`,
  darkModeIcon: <IconMoon />,
  listItemBgColor: '#fff',
  listItemBorderColor: '#e3e4f1',
  listItemColor: '#494c6b',
  strikeThruColor: '#d1d2da',
  placeholderColor: '#9495a5',
  deleteIconColor: '#9495a5',
  listShadow: '0px 35px 50px -15px rgba(194, 195, 214, 0.5)',
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --breakpoint-desktop: 23.5rem; /* not used as a CSS variable */
    --checkbox-gradient: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    --footer-active-color: #3a7cfd;

    --bg-color: ${props => props.theme.bgColor};
    --bg-desktop: ${props => props.theme.bgDesktop};
    --bg-mobile:${props => props.theme.bgMobile};
    --list-item-bg-color: ${props => props.theme.listItemBgColor};
    --list-item-border-color: ${props => props.theme.listItemBorderColor};
    --list-item-color: ${props => props.theme.listItemColor};
    --strike-thru-color: ${props => props.theme.strikeThruColor};
    --placeholder-color: ${props => props.theme.placeholderColor};
    --delete-icon-color: ${props => props.theme.deleteIconColor};
    --list-shadow: ${props => props.theme.listShadow};
  }
  html {
    font-family: 'Josefin Sans', sans-serif;
  }

  body {
    background-color: var(--bg-color);
  }
`;

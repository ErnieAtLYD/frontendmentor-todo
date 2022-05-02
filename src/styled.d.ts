// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    bgDesktop: string;
    bgMobile: string;
    darkModeIcon: React.ReactNode;
    listItemBgColor: string;
    listItemBorderColor: string;
    listItemColor: string;
    strikeThruColor: string;
    placeholderColor: string;
    deleteIconColor: string;
    listShadow: string;
  }
}

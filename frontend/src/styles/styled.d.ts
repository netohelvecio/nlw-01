import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      titleColor: string;
      textColor: string;
      backgroundColor: string;
      hoverButton: string;
    };

    font: {
      roboto: string;
      ubuntu: string;
    };
  }
}

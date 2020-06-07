import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      titleColor: string;
      textColor: string;
      backgroundColor: string;
    };

    font: {
      family: string;
    };
  }
}

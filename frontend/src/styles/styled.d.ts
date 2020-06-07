import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      titleColor: string;
      textColor: string;
      backgroundColor: string;
      hoverButton: string;
      trueWhite: string;
      white: string;
      inputColor: string;
      placeholderColor: string;
      itemColor: string;
      itemColorSelected: string;
    };

    font: {
      roboto: string;
      ubuntu: string;
    };
  }
}

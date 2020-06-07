import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.textColor}
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: ${(props) => props.theme.font.family};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.titleColor};
    font-family: ${(props) => props.theme.font.family};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

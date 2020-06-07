import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { Toast } from './styles/toast';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toast />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

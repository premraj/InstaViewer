import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import themes from './themes';

const Provider = () => {
  return (
    <ThemeProvider theme={themes.theme1}>
      <App />
    </ThemeProvider>
  );
};

export default Provider;

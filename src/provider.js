import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import themes from './themes';

const Provider = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.className = 'theme1';
  }, []);

  return (
    <ThemeProvider theme={themes.theme1}>
      <App />
    </ThemeProvider>
  );
};

export default Provider;

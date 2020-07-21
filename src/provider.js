import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import themes from './themes';
import { useThemeState, ThemeContextProvider } from './context/ThemeContext';

const Provider = () => {
  return (
    <ThemeContextProvider>
      <ProviderWithThemeContext />
    </ThemeContextProvider>
  );
};

const ProviderWithThemeContext = () => {
  const theme = useThemeState();

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Provider;

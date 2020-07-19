import React, { useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import themes from './themes';
import ThemeContext, { ThemeContextProvider } from './context/ThemeContext';

const Provider = () => {
  return (
    <ThemeContextProvider>
      <ProviderWithThemeContext />
    </ThemeContextProvider>
  );
};

const ProviderWithThemeContext = () => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

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

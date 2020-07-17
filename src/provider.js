import React, { useEffect, useContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import themes from './themes';
import { SearchContextProvider } from './context/SearchContext';
import ThemeContext, { ThemeContextProvider } from './context/ThemeContext';

const Provider = () => {
  return (
    <ThemeContextProvider>
      <ProviderWithThemeContext />
    </ThemeContextProvider>
  );
};

const ProviderWithThemeContext = () => {
  const { state } = useContext(ThemeContext);
  const { theme } = state;

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </ThemeProvider>
  );
};

export default Provider;

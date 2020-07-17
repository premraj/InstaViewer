import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import themes from './themes';
import { SearchContextProvider } from './context/SearchContext';

const Provider = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.className = 'theme1';
  }, []);

  return (
    <ThemeProvider theme={themes.theme1}>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </ThemeProvider>
  );
};

export default Provider;

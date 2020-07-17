import React, { useReducer, useMemo } from 'react';

const ThemeContext = React.createContext();

const initialState = {
  theme: 'theme1',
};

export const actionSetTheme = payload => ({ type: 'setTheme', payload });

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'setTheme':
      return { theme: payload };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

import React, { useReducer, useMemo } from 'react';

const ThemeContext = React.createContext();

const initialState = {
  theme: 'theme1',
};

export const actionSetTheme = payload => ({ type: 'setTheme', payload });
const reducerSetTheme = theme => ({ theme });

const actionReducerMap = {
  setTheme: reducerSetTheme,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  if (actionReducerMap[type]) return actionReducerMap[type](payload);
  return state;
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

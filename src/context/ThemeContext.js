import React, { useReducer, useContext, createContext } from 'react';

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

const initialState = 'theme1';

const actionSetTheme = payload => ({ type: 'setTheme', payload });
const reducerSetTheme = theme => theme;

const actionReducerMap = {
  setTheme: reducerSetTheme,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  if (actionReducerMap[type]) return actionReducerMap[type](payload);
  return state;
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeStateContext.Provider value={state}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

const useThemeState = () => {
  const state = useContext(ThemeStateContext);
  return state;
};

const useThemeDispatch = () => {
  const dispatch = useContext(ThemeDispatchContext);
  return dispatch;
};

export {
  ThemeContextProvider,
  actionSetTheme,
  useThemeState,
  useThemeDispatch,
};

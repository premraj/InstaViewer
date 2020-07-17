import React, { useReducer, useMemo } from 'react';

const SearchContext = React.createContext();

const initialState = {};

export const addSearchTerm = searchTerm => ({
  type: 'addSearchTerm',
  payload: searchTerm,
});

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'addSearchTerm':
      return { username: payload };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

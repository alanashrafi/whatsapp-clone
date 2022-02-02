import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();

export default function StateProvider({ initialSate, reducer, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialSate)}>
      {children}
    </StateContext.Provider>
  ); 
}
export const useStateValue = () => useContext(StateContext);

import React, { createContext, useContext, useReducer } from 'react';

// Prepares the datalayer
export const StateContext = createContext();

// Wrap ourapp and provide the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
 
    <StateContext.Provider
        value={useReducer(reducer, initialState)}
    >
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)
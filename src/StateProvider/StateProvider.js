import React, {createContext, useContext, useReducer} from 'react'

// Prepares the data layer 
export const StateContext = createContext()

// wrap app and provide the data layer 
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}> 
    {children}
  </StateContext.Provider>
)

// pulls information from the data layer
export const useStateValue = () => useContext(StateContext)

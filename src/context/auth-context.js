import React, { createContext, useContext, useReducer } from "react";

export const initialState = {
  userId: "",
  token: "",
  isLogin: false
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userId: action.userId,
        token: action.token,
        isLogin: true
      };

    case "LOGOUT":
      return {
        ...state,
        userId: "",
        token: "",
        isLogin: false
      };

    default:
      return state;
  }
};

export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

import { createContext, useReducer } from "react";
import { reducer } from "../Reducers/MoviesReducer";
export const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    list: [],
    details: {}
  });
  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};

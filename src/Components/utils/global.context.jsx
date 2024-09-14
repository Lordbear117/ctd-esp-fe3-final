/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer, useMemo } from "react";
import axios from "axios";
import { reducer } from "../../reducers/reducer";

export const initialState = {
  theme: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || []
}

export const ContextGlobal = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DATA", payload: res.data });
    });
  }, []);

  useEffect(() => {
    if (state.favs) {
      localStorage.setItem("favs", JSON.stringify(state.favs));
    }
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useGlobalContext = () => useContext(ContextGlobal);
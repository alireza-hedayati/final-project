"use client";
import React, { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import Cookies from "js-cookie";
const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        isLoading: false,
      };
    case "LOG_OUT":
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      Cookies.remove("user-mobile");
      return { isAuthenticated: false, user: null, isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
const UserContext = createContext();

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const userMobile = Cookies.get("user-mobile");

    console.log("Final Check - Mobile:", userMobile);
    if (accessToken && userMobile) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: { mobile: userMobile } },
      });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
export default UserProvider;

import { createContext, useState } from "react";

export const AuthContext =
  createContext();

const AuthProvider = ({
  children,
}) => {
  const [token, setToken] =
    useState("");

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
  };

  const isLoggedIn =
    !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
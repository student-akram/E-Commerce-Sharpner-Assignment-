import {
  createContext,
  useState,
} from "react";

export const AuthContext =
  createContext();

const AuthProvider = ({
  children,
}) => {

  const initialToken =
    localStorage.getItem("token");

  const [token, setToken] =
    useState(initialToken);

  const isLoggedIn =
    !!token;

  const login = (token) => {

    setToken(token);

    localStorage.setItem(
      "token",
      token
    );
  };

  const logout = () => {

    setToken("");

    localStorage.removeItem(
      "token"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
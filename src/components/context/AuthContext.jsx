import {
  createContext,
  useState,
  useEffect,
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

  useEffect(() => {

    const validateToken =
      async () => {

        if (!token) return;

        try {

          const response =
            await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBwZfd5tc5HS1LtC9_J9Mb62JyRtxEOpXA",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  idToken: token,
                }),
              }
            );

          const data =
            await response.json();

          if (
            !response.ok ||
            data.error
          ) {

            logout();
          }

        } catch (error) {

          console.log(
            error
          );

          logout();
        }
      };

    validateToken();

  }, [token]);

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
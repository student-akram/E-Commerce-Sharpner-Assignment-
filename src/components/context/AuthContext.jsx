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

  const tokenFromStorage =
    localStorage.getItem(
      "token"
    );

  const expirationTime =
    localStorage.getItem(
      "expirationTime"
    );

  let initialToken = "";

  if (
    tokenFromStorage &&
    expirationTime
  ) {

    const currentTime =
      new Date().getTime();

    if (
      currentTime <
      Number(expirationTime)
    ) {

      initialToken =
        tokenFromStorage;

    } else {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "email"
      );

      localStorage.removeItem(
        "expirationTime"
      );
    }
  }

  const [token, setToken] =
    useState(initialToken);

  const [email, setEmail] =
    useState(
      localStorage.getItem(
        "email"
      ) || ""
    );

  const isLoggedIn =
    !!token;

  const login = (
    token,
    email
  ) => {

    const expirationTime =
      new Date().getTime() +
      5 * 60 * 1000;

    setToken(token);

    setEmail(email);

    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "email",
      email
    );

    localStorage.setItem(
      "expirationTime",
      expirationTime
    );
  };

  const logout = () => {

    setToken("");

    setEmail("");

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "email"
    );

    localStorage.removeItem(
      "expirationTime"
    );
  };

  useEffect(() => {

    const validateToken =
      async () => {

        if (!token)
          return;

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
        email,
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
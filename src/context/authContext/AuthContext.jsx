import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch, useToast } from "../../hooks";

const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const {
    data: authResponse,
    loading: authLoading,
    error: authError,
    serverCall: authCall,
  } = useFetch();
  const navigate = useNavigate();

  const { addSuccessToast, addInfoToast, addDangerToast } = useToast();

  const [authState, setAuthState] = useState({
    isAuthenticated: localStorage.getItem("user") ? true : false,
    encodedToken: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  });

  useEffect(() => {
    let authType;
    if (authResponse) {
      if (authResponse.foundUser) {
        authType = "LOGIN";
      } else if (authResponse.createdUser) {
        authType = "SIGNUP";
      }
      setAuthState({
        isAuthenticated: true,
        user:
          authType === "LOGIN"
            ? authResponse.foundUser
            : authResponse.createdUser,
        token: authResponse.encodedToken,
      });
      localStorage.setItem(
        "user",
        JSON.stringify(
          authType === "LOGIN"
            ? authResponse.foundUser
            : authResponse.createdUser
        )
      );
      localStorage.setItem("token", authResponse.encodedToken);
      addSuccessToast(
        authType === "LOGIN"
          ? "User logged in successfully!"
          : "User signed up successfully!"
      );
    }
  }, [authResponse]);

  useEffect(() => {
    if (authError) {
      if (authError.status === 401) {
        addDangerToast("Invalid Credentials.");
      } else if (authError.status === 404) {
        addDangerToast("Email is not registered.");
      } else if (authError.status === 422) {
        addDangerToast("Email already registered!");
      }
    }
  }, [authError]);

  const loginHandler = async (loginDetails, from) => {
    const { email, password } = loginDetails;
    await authCall({
      url: "/api/auth/login",
      method: "POST",
      data: {
        email,
        password,
      },
    });
    navigate(from, { replace: true });
  };

  const signupHandler = ({ firstName, lastName, email, password }) => {
    authCall({
      url: "/api/auth/signup",
      method: "POST",
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });
  };

  const logoutHandler = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    addInfoToast("User logged out successfully!");
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginHandler,
        signupHandler,
        logoutHandler,
        authLoading,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

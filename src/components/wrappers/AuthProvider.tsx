"use client";
import { deleteToken, validateToken } from "@/lib/api/authAPI";

import React, {
  createContext,
  useState,
  useContext,
  useLayoutEffect,
} from "react";

type authContextType = {
  isUserAuthenticated: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  //   user: userInfo | null;
  login: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<authContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState<boolean>(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    try {
      //   const res = validateToken();
      //   res.then((data) => {
      //     setUser(data);
      //     setIsUserAuthenticated(true);
      //   });
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);

  const login = async () => {
    try {
      const res = validateToken();
      res.then((data) => {
        setUser(data);
        setIsUserAuthenticated(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    try {
      const res = deleteToken();
      res.then((data) => {
        setUser(null);
        setIsUserAuthenticated(false);
        console.log("user sucessfully logout");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        isLoading,
        setIsLoading,
        // user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): authContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Authentication must be used within a provider");
  }
  return context;
};

"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { checkAuth } from "../api/auth.api";

interface AuthContextType {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      const login = await checkAuth();
      setIsLogin(login !== undefined);
    };
    checkLoginStatus();
  }, []);

  const login = async () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

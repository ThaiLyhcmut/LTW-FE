"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { checkAuth } from "../api/auth.api";
import { createAppKit } from "@reown/appkit";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { sepolia } from "@reown/appkit/networks";

interface AuthContextType {
  isLogin: boolean;
  login: (data: any) => void;
  logout: () => void;
  auth: any;
}

const AuthContext = createContext<AuthContextType | null>(null);



export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [auth, setAuth] = useState();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const login = await checkAuth();
      setIsLogin(login !== undefined);
      setAuth(login)
    };
    checkLoginStatus();
  }, []);

  const login = async (data: any) => {
    setIsLogin(true);
    setAuth(data)
  };

  const logout = () => {
    setIsLogin(false);
    setAuth(undefined)
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout, auth }}>
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

import axios from "axios";
import httpStatus from "http-status";
import  React, { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "http://localhost:8000/api/v1/users",
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const router = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const res = await client.post("/register", { name, username, password });
      if (res.status === httpStatus.CREATED) {
        return res.data.message;
      }
    } catch (err) {
      return err.response?.data?.message || "Registration failed";
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const res = await client.post("/login", { username, password });
      if (res.status === httpStatus.OK) {
        localStorage.setItem("token", res.data.token);
        setUserData(res.data.user); // optional
        return res.data.message;
      }
    } catch (err) {
      return err.response?.data?.message || "Login failed";
    }
  };

  const data = { userData, setUserData, handleRegister, handleLogin };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

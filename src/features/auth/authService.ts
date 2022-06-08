import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export interface User {
  name?: string;
  email: string;
  password: string;
}

const API_URL = "http://localhost:4000/api/users/";

// Register user
export const register = async (userData: User) => {
  const { data } = await axios.post(API_URL, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success(data.message);
  }
  return data;
};

// Login user
const login = async (userData: User) => {
  const { data } = await axios.post(API_URL + "login", userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success(data.message);
  }

  return data;
};

//Logout user
const loguout = () => localStorage.removeItem("user");

const authService = {
  register,
  loguout,
  login,
};

export default authService;

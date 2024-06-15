import axios from "axios";
import { http } from "./http";

export const signup = (data) => {
  return axios.post(`http://localhost:8080/accounts`, data);
};

export const login = (data) => {
  return axios.post(`http://localhost:8080/accounts/auth`, data);
};

export const apiGetAccounts = (page = 1, limit = 8) => {
  return http.get(`accounts`, { params: { page, limit } });
};

export const apiCreateAccount = (value) => {
  return http.post(`accounts`, value, )
};

export const apiUpdateAccount = (id , value) => {
  return http.put(`accounts/${id}`, value )
}

export const apiDeleteAccount = (id) => {
  return http.delete(`accounts/${id}`); 
}
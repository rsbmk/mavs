import axios from "axios";

import { SESSION_STORAGE_KEYS, VITE_MARVEL_BASE_URL, VITE_MARVEL_HASH, VITE_MARVEL_PUBLIC_KEY, VITE_MAVS_BASE_URL } from "@/constants";

export const HTTP_MARVERL = axios.create({
  baseURL: VITE_MARVEL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apikey: VITE_MARVEL_PUBLIC_KEY,
    hash: VITE_MARVEL_HASH,
    ts: "1",
  },
});

export const HTTP_MAVS = axios.create({
  baseURL: VITE_MAVS_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.sessionStorage.getItem("jwt")}`,
  },
});

HTTP_MAVS.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.sessionStorage.removeItem(SESSION_STORAGE_KEYS.JWT);
    }
    return Promise.reject(error);
  }
);

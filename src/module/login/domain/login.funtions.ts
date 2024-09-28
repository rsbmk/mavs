import { useNavigate } from "react-router-dom";

import { PATHS, SESSION_STORAGE_KEYS } from "@/constants";
import { login } from "../infrastructure/login.repository";
import { InvalidCredentialsException } from "./login.exceptions";
import { Credentials, Session } from "./login.types";

export function processSession(session: Session) {
  window.sessionStorage.setItem(SESSION_STORAGE_KEYS.JWT, session.token);
}

export function useLogin() {
  const navigate = useNavigate();

  return async (credentials: Credentials) => {
    const { password, username } = credentials;
    if (!password || !username) throw new InvalidCredentialsException();

    const session = await login(credentials);
    processSession(session);
    navigate(PATHS.HOME);
  };
}

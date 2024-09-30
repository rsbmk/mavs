import { useNavigate } from "react-router-dom";

import { PATHS, SESSION_STORAGE_KEYS } from "@/constants";
import { InvalidLoginCredentialsException, InvalidSignUpCredentialsException } from "./auth.exceptions";
import { login, signup } from "./auth.repository";
import { LogInCredentials, SignUpCredentials } from "./auth.types";

export function useLogin() {
  const navigate = useNavigate();

  return async (credentials: LogInCredentials) => {
    const { password, username } = credentials;
    if (!password || !username) throw new InvalidLoginCredentialsException();

    const session = await login(credentials);
    window.sessionStorage.setItem(SESSION_STORAGE_KEYS.JWT, session.token);
    navigate(PATHS.HOME);
  };
}

export function useSignUp() {
  const login = useLogin();

  return async (credentials: SignUpCredentials) => {
    const { name, password, username } = credentials;
    if (!name || !password || !username) throw new InvalidSignUpCredentialsException();

    await signup(credentials);
    // TODO: set user cache with query client
    await login({ password, username });
  };
}

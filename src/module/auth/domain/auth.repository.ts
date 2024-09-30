import type { Response } from "@/module/common/domain/mavs.repository";
import type { LogInCredentials, Session, SignUpCredentials, User } from "./auth.types";

import { HTTP_MAVS, httpMavsHeaders } from "@/lib/http";

export async function login(credentials: LogInCredentials) {
  const { data } = await HTTP_MAVS.post<Response<Session>>("/login", credentials, {
    headers: httpMavsHeaders(),
  });
  return data.data;
}

export async function signup(credentials: SignUpCredentials) {
  const { data } = await HTTP_MAVS.post<Response<User>>("/users", credentials, {
    headers: httpMavsHeaders(),
  });
  return data.data;
}

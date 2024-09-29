import type { Response } from "@/module/common/domain/mavs.repository";
import type { LogInCredentials, Session, SignUpCredentials, User } from "../domain/auth.types";

import { HTTP_MAVS } from "@/lib/http";

export async function login(credentials: LogInCredentials) {
  const { data } = await HTTP_MAVS.post<Response<Session>>("/login", credentials);
  return data.data;
}

export async function signup(credentials: SignUpCredentials) {
  const { data } = await HTTP_MAVS.post<Response<User>>("/users", credentials);
  return data.data;
}

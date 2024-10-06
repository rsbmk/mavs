import type { Response } from "@/module/common/domain/mavs.repository";
import type { LogInCredentials, Session, SignUpCredentials, User } from "./auth.types";

import { HTTP_MAVS } from "@/lib/http";

/**
 * Logs in a user.
 *
 * @param credentials The user's credentials.
 * @returns The created session.
 */
export async function login(credentials: LogInCredentials) {
  const { data } = await HTTP_MAVS.post<Response<Session>>("/login", credentials);
  return data.data;
}

/**
 * Creates a new user.
 *
 * @param credentials The user data.
 * @returns The newly created user.
 */
export async function signup(credentials: SignUpCredentials) {
  const { data } = await HTTP_MAVS.post<Response<User>>("/users", credentials);
  return data.data;
}

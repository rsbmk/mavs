import type { Credentials, Response, Session } from "../domain/login.types";

import { HTTP_MAVS } from "@/lib/http";

export async function login(credentials: Credentials) {
  const { data } = await HTTP_MAVS.post<Response<Session>>("/login", credentials);
  return data.data;
}

import type { Response } from "@/module/common/domain/mavs.repository";
import type { CreateLikeDTO, Like } from "./like.type";

import { HTTP_MAVS, httpMavsHeaders } from "@/lib/http";

export async function like(like: CreateLikeDTO) {
  const { data } = await HTTP_MAVS.post<Response<Like>>("/likes", like, {
    headers: httpMavsHeaders(),
  });
  return data.data;
}

export async function unLike(id: string) {
  const { data } = await HTTP_MAVS.delete<Response<Like>>(`/likes/${id}`, {
    headers: httpMavsHeaders(),
  });
  return data.data;
}

export async function findLikesByUser() {
  const { data } = await HTTP_MAVS.get<Response<Like[]>>(`/likes/user`, {
    headers: httpMavsHeaders(),
  });
  return data.data;
}

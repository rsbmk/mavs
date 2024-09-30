import type { Response } from "@/module/common/domain/mavs.repository";
import type { CreateLikeDTO, Like } from "./like.type";

import { HTTP_MAVS } from "@/lib/http";

export async function like(like: CreateLikeDTO) {
  const { data } = await HTTP_MAVS.post<Response<Like>>("/likes", like);
  return data.data;
}

export async function unLike(id: number) {
  const { data } = await HTTP_MAVS.delete<Response<Like>>(`/likes/${id}`);
  return data.data;
}

export async function findLikesByUser() {
  const { data } = await HTTP_MAVS.get<Response<Like[]>>(`/likes/user`);
  return data.data;
}

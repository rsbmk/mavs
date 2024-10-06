import type { Response } from "@/module/common/domain/mavs.repository";
import type { CreateLikeDTO, Like } from "./like.type";

import { HTTP_MAVS } from "@/lib/http";

/**
 * Create a like in the database.
 *
 * @param {CreateLikeDTO} like - The data to create a like.
 * @returns {Promise<Like>} The created like.
 */
export async function like(like: CreateLikeDTO) {
  const { data } = await HTTP_MAVS.post<Response<Like>>("/likes", like);
  return data.data;
}

/**
 * Delete a like in the database.
 *
 * @param {string} id - The id of the like to delete.
 * @returns {Promise<Like>} The deleted like.
 */
export async function unLike(id: string) {
  const { data } = await HTTP_MAVS.delete<Response<Like>>(`/likes/${id}`);
  return data.data;
}

/**
 * Find all likes of the current user.
 *
 * @returns {Promise<Like[]>} The likes of the current user.
 */
export async function findLikesByUser() {
  const { data } = await HTTP_MAVS.get<Response<Like[]>>(`/likes/user`);
  return data.data;
}

/**
 * Find a like by character id and user id.
 *
 * @param {number} characterId - The id of the character.
 * @returns {Promise<Like>} The like or null if not found.
 */
export async function findLikeByCharacterAndUser(characterId: number) {
  const { data } = await HTTP_MAVS.get<Response<Like>>(`/likes/${characterId}/character`);
  return data.data;
}

import type { Response } from "@/module/common/domain/mavs.repository";
import type { Comment, CreateComment } from "../domain/comment.type";

import { HTTP_MAVS } from "@/lib/http";

/**
 * Find all comments of a character by the character id.
 *
 * @param {string} id - The id of the character.
 * @returns {Promise<Comment[]>} The comments of the character.
 */
export async function findCommentsByCharacer(id: string) {
  const { data } = await HTTP_MAVS.get<Response<Comment[]>>(`/comments/characters/${id}`);
  return data.data;
}

/**
 * Creates a new comment.
 *
 * @param {CreateComment} comment The comment data.
 * @returns {Promise<Comment>} The newly created comment.
 */
export async function createComment(comment: CreateComment) {
  const { data } = await HTTP_MAVS.post<Response<Comment>>("/comments", comment);
  return data.data;
}

/**
 * Deletes a comment by its id.
 *
 * @param {string} id - The id of the comment.
 * @returns {Promise<Comment>} The deleted comment.
 */
export async function deleteComment(id: string) {
  const { data } = await HTTP_MAVS.delete<Response<Comment>>(`/comments/${id}`);
  return data.data;
}

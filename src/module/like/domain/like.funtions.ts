import type { CreateLikeDTO, DeleteLikeDTO } from "./like.type";

import { InvalidLikeException } from "./like.exceptions";
import { findLikesByUser, like, unLike } from "./like.respository";

export function useLike() {
  return (likeDTO: CreateLikeDTO) => {
    const { characterId } = likeDTO;
    if (!characterId) throw new InvalidLikeException();
    return like(likeDTO);
  };
}

export function useUnLike() {
  return (likeDTO: DeleteLikeDTO) => {
    const { id } = likeDTO;
    if (!id) throw new InvalidLikeException();
    return unLike(id);
  };
}

export function useLikeByUser() {
  return () => findLikesByUser();
}

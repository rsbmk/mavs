import type { CreateLikeDTO } from "./like.type";

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
  return (likeDTO: CreateLikeDTO) => {
    const { characterId } = likeDTO;
    if (!characterId) throw new InvalidLikeException();
    return unLike(characterId);
  };
}

export function useLikeByUser() {
  return () => findLikesByUser();
}

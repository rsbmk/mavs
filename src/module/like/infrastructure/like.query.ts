import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { useLikeByUser } from "../domain/like.funtions";
import { findLikeByCharacterAndUser } from "../domain/like.respository";

/**
 * Find all likes of the current user.
 *
 * @returns {Promise<Like[]>} The likes of the current user.
 */
export function useFindLikesByUser() {
  const queryFn = useLikeByUser();

  return useQuery({
    queryKey: [QUERY_KEYS.LIKES_BY_USER],
    queryFn,
  });
}

/**
 * Find a like by character id and user id.
 *
 * @param {number} characterId - The id of the character.
 * @returns {Promise<Like>} The like or null if not found.
 */
export function useFindOneLikesByUserAndCharacter(characterId?: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.LIKES_BY_USER, characterId],
    enabled: Boolean(characterId),
    queryFn: () => findLikeByCharacterAndUser(Number(characterId)),
  });
}

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { useLikeByUser } from "../domain/like.funtions";
import { findLikeByCharacterAndUser } from "../domain/like.respository";
import { Like } from "../domain/like.type";

/**
 * Find all likes of the current user.
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
export function useFindOneLikesByUserAndCharacter(characterId: number) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [QUERY_KEYS.LIKES_BY_USER, characterId],
    enabled: Boolean(characterId),
    queryFn: async () => {
      const queyKeyAllLikes = [QUERY_KEYS.LIKES_BY_USER];

      const cache = queryClient.getQueryData<Like[]>(queyKeyAllLikes);
      const like = cache?.find((like) => like.characterId === characterId);
      if (like) return like;

      /**
       * if i have a cache, and the like is not there maybe not exist in the server
       */
      if (cache && cache.length > 0) return null;
      return findLikeByCharacterAndUser(Number(characterId));
    },
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { handleError } from "@/module/common/utils";

import { useLike, useUnLike } from "../domain/like.funtions";
import { Like } from "../domain/like.type";

/**
 * React query mutation to like a character.
 *
 * @returns Mutation function to like a character.
 */
export function useLikeMutation() {
  const mutationFn = useLike();
  const queryClient = useQueryClient();
  const queryKeyLikes = [QUERY_KEYS.LIKES_BY_USER];

  return useMutation({
    mutationFn,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: queryKeyLikes });
      const previousCache = queryClient.getQueryData<Like[]>(queryKeyLikes);
      if (previousCache && previousCache.length > 0) {
        const newLike: Like = {
          id: crypto.randomUUID(),
          characterId: variables.characterId,
          userId: previousCache[0].userId,
          createAt: new Date(),
          deleteAt: null,
          state: true,
          updateAt: new Date(),
        };
        const newCache = [...previousCache, newLike];
        queryClient.setQueryData(queryKeyLikes, newCache);
      }
      return { previousCache };
    },
    onError(error, variables) {
      handleError(error, `An error has ocurred while like: ${variables.characterId}`);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeyLikes });
    },
  });
}

/**
 * React query mutation to unlike a character.
 *
 * @returns Mutation function to unlike a character.
 */
export function useUnLikeMutation() {
  const mutationFn = useUnLike();
  const queryClient = useQueryClient();
  const queryKeyLikes = [QUERY_KEYS.LIKES_BY_USER];

  return useMutation({
    mutationFn,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: queryKeyLikes });
      const previousCache = queryClient.getQueryData<Like[]>(queryKeyLikes);
      if (previousCache && previousCache.length > 0) {
        const rmLike = previousCache.find((like) => like.id === variables.id);
        queryClient.setQueryData([QUERY_KEYS.LIKES_BY_USER, rmLike?.characterId], null);

        const newCacheLikes = previousCache.filter((like) => like.id !== variables.id);
        queryClient.setQueryData(queryKeyLikes, newCacheLikes);
      }
      return { previousCache };
    },
    onError(error, variables) {
      handleError(error, `An error has ocurred while like: ${variables.id}`);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeyLikes });
    },
  });
}

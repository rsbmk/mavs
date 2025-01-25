import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { handleError } from "@/module/common/utils";

import { useLike, useUnLike } from "../domain/like.funtions";

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
    onError(error, variables) {
      handleError(error, `An error has ocurred while like: ${variables.id}`);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeyLikes });
    },
  });
}

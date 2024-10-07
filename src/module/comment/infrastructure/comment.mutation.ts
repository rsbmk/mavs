import { QUERY_KEYS } from "@/constants";
import { handleError } from "@/module/common/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "./comment.repository";

export function useCreateComment(characterId?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (comment: string) => {
      if (!characterId) throw new Error("Character id is required");
      return createComment({ characterId: +characterId, comment });
    },
    onError(error) {
      handleError(error, "An error has ocurred while create comment");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENTS_BY_CHARACTER, characterId] });
    },
  });
}

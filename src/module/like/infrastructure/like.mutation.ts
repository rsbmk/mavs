import { useMutation } from "@tanstack/react-query";

import { handleError } from "@/module/common/utils";
import { useLike, useUnLike } from "../domain/like.funtions";

export function useLikeMutation() {
  const mutationFn = useLike();

  return useMutation({
    mutationKey: ["like"],
    mutationFn,
    onError(error, variables) {
      handleError(error, `An error has ocurred while like: ${variables.characterId}`);
    },
  });
}

export function useUnLikeMutation() {
  const mutationFn = useUnLike();

  return useMutation({
    mutationKey: ["like"],
    mutationFn,
    onError(error, variables) {
      handleError(error, `An error has ocurred while like: ${variables.id}`);
    },
  });
}

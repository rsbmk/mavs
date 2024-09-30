import { useMutation } from "@tanstack/react-query";

import { handleError } from "@/module/common/utils";
import { useLogin, useSignUp } from "../domain/auth.functions";

export function useLoginMutation() {
  const mutationFn = useLogin();

  return useMutation({
    mutationKey: ["login"],
    mutationFn,
    onError(error, variables) {
      handleError(error, `An error has occurred while logging in: ${variables.username}`);
    },
  });
}

export function useSignUpMutation() {
  const mutationFn = useSignUp();

  return useMutation({
    mutationKey: ["signup"],
    mutationFn,
    onError(error, variables) {
      handleError(error, `An error has ocurred while create: ${variables.name}`);
    },
  });
}

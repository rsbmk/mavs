import { useMutation } from "@tanstack/react-query";

import { handleError } from "@/module/common/utils";
import { useLogin, useSignUp } from "../domain/auth.functions";

export function useLoginMutation() {
  const loginMutation = useLogin();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginMutation,
    onError(error, variables) {
      handleError(error, `An error has occurred while logging in: ${variables.username}`);
    },
  });
}

export function useSignUpMutation() {
  const signUpMutation = useSignUp();

  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signUpMutation,
    onError(error, variables) {
      handleError(error, `An error has ocurred while create: ${variables.name}`);
    },
  });
}

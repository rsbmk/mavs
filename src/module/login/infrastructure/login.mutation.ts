import { handleError } from "@/module/common/utils";
import { useMutation } from "@tanstack/react-query";

import { useLogin } from "../domain/login.funtions";

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

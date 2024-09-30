import { useQuery } from "@tanstack/react-query";
import { useLikeByUser } from "../domain/like.funtions";

export function userFindLikesByUserQuery() {
  const queryFn = useLikeByUser();

  return useQuery({
    queryKey: ["likes-by-user"],
    queryFn,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

import { useQuery } from "@tanstack/react-query";

import { SESSION_STALE_TIME, SESSION_STORAGE_KEYS } from "@/constants";

export function useSession() {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => {
      const session = window.sessionStorage.getItem(SESSION_STORAGE_KEYS.JWT);
      return Boolean(session);
    },
    refetchInterval: SESSION_STALE_TIME,
  });
}

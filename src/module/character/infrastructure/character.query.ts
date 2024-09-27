import { useInfiniteQuery } from "@tanstack/react-query";

import { queryFnFindAllCharacter } from "./find-all.character.respository";
import { useFilters } from "@/hooks/filters.hook";

export function useQueryCharacters() {
  const { searchDefaultVaule, selectDefaultValue } = useFilters();

  const queryKey = ["characters", searchDefaultVaule, selectDefaultValue];

  return useInfiniteQuery({
    queryKey,
    initialPageParam: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    queryFn: queryFnFindAllCharacter,
    getNextPageParam: (lastPage, _pages, lastPageParam) => {
      const hasNextPage = lastPage.offset + lastPage.limit < lastPage.total;
      if (hasNextPage) return lastPageParam + 1;
      return undefined;
    },
    select: (data) => data.pages.flatMap((data) => data.results),
  });
}

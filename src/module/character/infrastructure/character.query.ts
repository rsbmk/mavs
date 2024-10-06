import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { useFilters } from "@/hooks/filters.hook";
import { ResponseCharacter } from "../domain/character.type";
import { findAllCharacter, findOneCharacter } from "./character.respository";

export function useQueryCharacters() {
  const { searchDefaultVaule, selectDefaultValue } = useFilters();
  const queryKey = [QUERY_KEYS.CHARACTERS, searchDefaultVaule, selectDefaultValue];

  return useInfiniteQuery({
    queryKey,
    initialPageParam: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    queryFn: ({ pageParam }) => findAllCharacter({ page: pageParam, comics: selectDefaultValue, nameStartsWith: searchDefaultVaule }),
    getNextPageParam: (lastPage, _pages, lastPageParam) => {
      const hasNextPage = lastPage.offset + lastPage.limit < lastPage.total;
      if (hasNextPage) return lastPageParam + 1;
      return undefined;
    },
    select: (data) => data.pages.flatMap((data) => data.results),
  });
}

type CacheCharacter = {
  pageParams: number[];
  pages: ResponseCharacter["data"][];
};

export function useQueryCharacterBy(id?: string) {
  const queryClient = useQueryClient();
  const { searchDefaultVaule, selectDefaultValue } = useFilters();

  return useQuery({
    queryKey: [QUERY_KEYS.CHARACTERS, id],
    enabled: Boolean(id),
    queryFn: async () => {
      const queryKeyCharacters = [QUERY_KEYS.CHARACTERS, searchDefaultVaule, selectDefaultValue];

      const cache = queryClient.getQueryData<CacheCharacter>(queryKeyCharacters);
      const pages = cache?.pages.flatMap((page) => page.results) || [];
      const character = pages.find((character) => character.id === Number(id));
      if (character) return character;

      const { results } = await findOneCharacter(Number(id));
      return results[0];
    },
  });
}

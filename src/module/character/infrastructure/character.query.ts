import { useQuery } from "@tanstack/react-query";

import { findAllCharacter } from "./character.respository";
import { useFilters } from "@/hooks/filters.hook";

export function useQueryCharacters() {
  const { searchDefaultVaule, selectDefaultValue } = useFilters();

  const queryKey = ["characters", searchDefaultVaule, selectDefaultValue];
  return useQuery({
    queryKey,
    queryFn: () => findAllCharacter({ comics: selectDefaultValue, nameStartsWith: searchDefaultVaule }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
}

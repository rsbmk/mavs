import { useSearchParams } from "react-router-dom";

import { INPUTS_NAMES, CLEAR_SELECTION } from "@/constants";

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchDefaultVaule = searchParams.get(INPUTS_NAMES.SEARCH) || undefined;
  const selectDefaultValue = searchParams.get(INPUTS_NAMES.SELECT_COMIC) || undefined;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const search = formData.get(INPUTS_NAMES.SEARCH) as string;

    if (search) {
      searchParams.set(INPUTS_NAMES.SEARCH, search);
    } else {
      searchParams.delete(INPUTS_NAMES.SEARCH);
    }

    setSearchParams(searchParams);
  };

  const handleSelect = (selection: string) => {
    if (selection === CLEAR_SELECTION) {
      searchParams.delete(INPUTS_NAMES.SELECT_COMIC);
    } else {
      searchParams.set(INPUTS_NAMES.SELECT_COMIC, selection);
    }

    setSearchParams(searchParams);
  };

  return {
    searchDefaultVaule,
    selectDefaultValue,
    handleSearch,
    handleSelect,
  };
}

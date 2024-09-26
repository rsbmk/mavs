import { Search } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { INPUTS_NAMES, CLEAR_SELECTION } from "@/constants";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { useFilters } from "@/hooks/filters.hook";

const comicsList = ["Avengers", "X-Men", "Fantastic Four", "Spider-Man", "Guardians of the Galaxy", CLEAR_SELECTION];

export function Filters() {
  const { handleSearch, searchDefaultVaule, selectDefaultValue } = useFilters();

  return (
    <form className="flex flex-col sm:flex-row mb-8 gap-2 w-full" onSubmit={handleSearch}>
      <Button>
        <Search width={18} height={18} />
      </Button>
      <Input defaultValue={searchDefaultVaule} name={INPUTS_NAMES.SEARCH} placeholder="Search characters name start with..." autoFocus className="flex-grow" />
      <Select defaultValue={selectDefaultValue} name={INPUTS_NAMES.SELECT_COMIC}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Filter by comic" />
        </SelectTrigger>
        <SelectContent>
          {comicsList.map((comic) => {
            const isClearOpt = comic === CLEAR_SELECTION;
            return (
              <SelectItem key={comic} value={comic} className={isClearOpt ? "bg-gray-50" : ""}>
                {comic}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </form>
  );
}

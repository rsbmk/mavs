import { Search } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { INPUTS_NAMES, CLEAR_SELECTION, COMICS_LIST } from "@/constants";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { useFilters } from "@/hooks/filters.hook";

export function Filters() {
  const { handleSearch, handleSelect, searchDefaultVaule, selectDefaultValue } = useFilters();

  return (
    <section className="flex flex-col sm:flex-row mb-8 gap-2 w-full">
      <form className="flex gap-2 w-full" onSubmit={handleSearch}>
        <Button>
          <Search width={18} height={18} />
        </Button>
        <Input defaultValue={searchDefaultVaule} name={INPUTS_NAMES.SEARCH} placeholder="Search characters name start with..." autoFocus className="flex-grow" />
      </form>
      <Select defaultValue={selectDefaultValue} name={INPUTS_NAMES.SELECT_COMIC} onValueChange={handleSelect}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Filter by comic" />
        </SelectTrigger>
        <SelectContent>
          {COMICS_LIST.map(({ id, title }) => {
            const isClearOpt = id === CLEAR_SELECTION;
            return (
              <SelectItem key={id} value={String(id)} className={isClearOpt ? "bg-gray-50" : ""}>
                {title}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </section>
  );
}

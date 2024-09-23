import { useState } from "react";

import { HeroList } from "@/components/sections/heroList";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

const comicsList = ["Avengers", "X-Men", "Fantastic Four", "Spider-Man", "Guardians of the Galaxy"];

export function Filters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComic, setSelectedComic] = useState("");

  return (
    <>
      <section className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input placeholder="Search characters..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-grow" />
        <Select value={selectedComic} onValueChange={setSelectedComic}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by comic" />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value={selectedComic}>{selectedComic}</SelectItem> */}
            {comicsList.map((comic) => (
              <SelectItem key={comic} value={comic}>
                {comic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
      <HeroList searchTerm={searchTerm} selectedComic={selectedComic} />
    </>
  );
}

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { useQueryCharacters } from "@/module/character/infrastructure/character.query";
import { Button } from "../ui/button";
import { Character } from "./character";
import { HeroListPlaceholder } from "./characterList.placeholder";

export function CharacterList() {
  const [likedCharacters] = useState<Set<number>>(new Set());
  const { data, isPending, isError, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useQueryCharacters();

  if (isPending) {
    return <HeroListPlaceholder />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-60">
        <h3>We have an error</h3>
      </div>
    );
  }

  const loadMoreButtonDisabled = !hasNextPage || isFetchingNextPage;
  const isLoadingCharacters = isFetching || isFetchingNextPage;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((character) => (
          <Character character={character} isFav={likedCharacters.has(character.id)} key={character.id + character.name} />
        ))}
      </div>
      <Button className="block mx-auto my-4 disabled:cursor-not-allowed" disabled={loadMoreButtonDisabled} onClick={() => fetchNextPage()}>
        {!hasNextPage ? "No more pages" : isLoadingCharacters ? <Loader2 className="animate-spin" /> : "Load more"}
      </Button>
    </>
  );
}

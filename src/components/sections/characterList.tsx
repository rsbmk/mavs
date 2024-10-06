import { Loader2 } from "lucide-react";

import { useQueryCharacters } from "@/module/character/infrastructure/character.query";
import { useFindLikesByUser } from "@/module/like/infrastructure/like.query";

import { Character } from "../character/character";
import { CharacterListPlaceholder } from "../character/characterList.placeholder";
import { Button } from "../ui/button";

export function CharacterList() {
  const { isPending: isPendingLikes } = useFindLikesByUser();
  const { data, isPending, isError, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useQueryCharacters();

  if (isPending || isPendingLikes) {
    return <CharacterListPlaceholder />;
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
        {data.map((character) => {
          return <Character character={character} key={character.id + character.name} />;
        })}
      </div>
      <Button className="block mx-auto my-4 disabled:cursor-not-allowed" disabled={loadMoreButtonDisabled} onClick={() => fetchNextPage()}>
        {!hasNextPage ? "No more pages" : isLoadingCharacters ? <Loader2 className="animate-spin" /> : "Load more"}
      </Button>
    </>
  );
}

import { Loader2 } from "lucide-react";

import { useQueryCharacters } from "@/module/character/infrastructure/character.query";
import { userFindLikesByUserQuery } from "@/module/like/infrastructure/like.query";
import { Button } from "../ui/button";
import { Character } from "./character";
import { HeroListPlaceholder } from "./characterList.placeholder";

export function CharacterList() {
  const { data: likes = [], isPending: isPendingLikes } = userFindLikesByUserQuery();
  const { data, isPending, isError, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useQueryCharacters();

  if (isPending || isPendingLikes) {
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
        {data.map((character) => {
          const likeId = likes.find((like) => like.characterId === character.id)?.id;
          return <Character character={character} likeId={likeId} key={character.id + character.name} />;
        })}
      </div>
      <Button className="block mx-auto my-4 disabled:cursor-not-allowed" disabled={loadMoreButtonDisabled} onClick={() => fetchNextPage()}>
        {!hasNextPage ? "No more pages" : isLoadingCharacters ? <Loader2 className="animate-spin" /> : "Load more"}
      </Button>
    </>
  );
}

import { useState } from "react";

import { Character } from "./character";
import { useQueryCharacters } from "@/module/character/infrastructure/character.query";
import { HeroListPlaceholder } from "./characterList.placeholder";

export function CharacterList() {
  const [likedCharacters] = useState<Set<number>>(new Set());
  const { data, isPending, isError } = useQueryCharacters();

  if (isPending) {
    return <HeroListPlaceholder />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-60">
        <h3> We have an error</h3>
      </div>
    );
  }

  const { results: characters } = data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => {
        const { id } = character;
        return <Character character={character} isFav={likedCharacters.has(id)} key={id} />;
      })}
    </div>
  );
}

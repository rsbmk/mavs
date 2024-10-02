import type { Character } from "@/module/character/domain/character.type";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterFooter } from "./footer";

type Props = {
  character: Character;
  likeId?: string;
};

export function Character({ character, likeId }: Props) {
  const { id, name, thumbnail, description } = character;
  const src = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Card key={id} className="overflow-hidden">
      <img src={src} alt={name} className="w-full h-[300px] object-cover" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-4">{description || "No description"}</p>
      </CardContent>
      <CharacterFooter characterId={id} likeId={likeId} />
    </Card>
  );
}

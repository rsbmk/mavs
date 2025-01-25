import { Link } from "react-router-dom";

import type { Character } from "@/module/character/domain/character.type";
import type { LikeUser } from "@/module/like/domain/like.type";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PATHS } from "@/constants";
import { CharacterLikeButton } from "./like-button";

type Props = {
  character: Character;
  likes: LikeUser[];
};

export function Character({ character, likes }: Props) {
  const { id, name, thumbnail, description } = character;
  const src = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Card key={id} className="overflow-hidden">
      <Link to={`${PATHS.CHARACTER_DETAIL}/${id}`}>
        <img src={src} alt={name} className="w-full h-[300px] object-cover" />
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 line-clamp-4">{description || "No description"}</p>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-2">
        <CharacterLikeButton likes={likes} characterId={id} />
      </CardFooter>
    </Card>
  );
}

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { CharacterLikeButton } from "@/components/character/like-button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { PATHS } from "@/constants";

type Props = {
  characterId?: string;
  name: string;
};

export function HeaderCharacter({ characterId, name }: Props) {
  return (
    <CardHeader>
      <div className="flex justify-between items-center">
        <Link to={PATHS.HOME}>
          <ArrowLeft />
        </Link>
        <CardTitle className="text-3xl font-bold">{name}</CardTitle>
        <CharacterLikeButton characterId={Number(characterId)} />
      </div>
    </CardHeader>
  );
}

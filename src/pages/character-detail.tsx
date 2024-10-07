import { useParams } from "react-router-dom";

import { Comics } from "@/components/character/datails/comics";
import { Comments } from "@/components/character/datails/comments";
import { CreateCommentForm } from "@/components/character/datails/createComment";
import { HeaderCharacter } from "@/components/character/datails/header";
import { CharacterPlaceholder } from "@/components/character/placeholders";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { URL_PARAMS } from "@/constants";
import { useQueryCharacterBy } from "@/module/character/infrastructure/character.query";

export default function CharacterDetail() {
  const { characterId } = useParams<URL_PARAMS>();
  const { data: character, isError, isPending } = useQueryCharacterBy(characterId);

  if (isError) {
    return (
      <div className="flex justify-center items-center h-60">
        <h3>We have an error</h3>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="container mx-auto p-4">
        <CharacterPlaceholder />
      </div>
    );
  }

  const { name, description, thumbnail, comics } = character;
  const src = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <HeaderCharacter characterId={characterId} name={name} />
        <CardContent className="space-y-4">
          <img src={src} alt={name} className="object-cover w-full h-full rounded-lg aspect-[16/9]" />
          <p className="text-lg">{description}</p>
          <Comics comics={comics} />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Comments characterId={characterId} />
          <CreateCommentForm characterId={characterId} />
        </CardFooter>
      </Card>
    </div>
  );
}

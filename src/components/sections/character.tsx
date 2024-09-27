import type { Character } from "@/module/character/domain/character.type";

import { Heart } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  character: Character;
  isFav: boolean;
};

export function Character({ character, isFav }: Props) {
  const { id, name, thumbnail, description } = character;
  // const { items: comicsItems } = comics;

  const toggleLike = (id: number) => {
    // setLikedCharacters((prev) => {
    //   const newSet = new Set(prev);
    //   if (newSet.has(id)) {
    //     newSet.delete(id);
    //   } else {
    //     newSet.add(id);
    //   }
    //   return newSet;
    // });
  };

  return (
    <Card key={id} className="overflow-hidden">
      <img src={thumbnail.path + "." + thumbnail.extension} alt={name} className="w-full h-[300px] object-cover" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description || "No description"}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <Button variant={isFav ? "default" : "outline"} size="sm" className="mt-2" onClick={() => toggleLike(id)}>
          <Heart className={`mr-2 h-4 w-4 ${isFav ? "fill-current" : ""}`} />
          {isFav ? "Liked" : "Like"}
        </Button>
      </CardFooter>
    </Card>
  );
}

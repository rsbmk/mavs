import type { Character } from "@/module/character/domain/character.type";

import { Heart, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLikeMutation, useUnLikeMutation } from "@/module/like/infrastructure/like.mutation";

type Props = {
  character: Character;
  likeId?: string;
};

export function Character({ character, likeId }: Props) {
  const { id, name, thumbnail, description } = character;
  const { mutate: onLike, isPending: isPendingLike } = useLikeMutation();
  const { mutate: onUnLike, isPending: isPendingUnLike } = useUnLikeMutation();

  const toggleLike = (characterId: number) => () => {
    const action = likeId ? onUnLike : onLike;
    action({ characterId });
  };

  const isPending = isPendingLike || isPendingUnLike;
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
      <CardFooter className="flex flex-col items-start gap-2">
        <Button variant={likeId ? "default" : "outline"} size="sm" className="mt-2 gap-2" onClick={toggleLike(id)}>
          {isPending ? <Loader2 className="animate-spin" size={16} /> : <Heart className={likeId ? "fill-current" : ""} size={16} />}
          {likeId ? "Liked" : "Like"}
        </Button>
      </CardFooter>
    </Card>
  );
}

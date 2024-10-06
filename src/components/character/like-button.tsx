import { Heart, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { useSession } from "@/module/auth/infrastructure/auth.query";
import { useLikeMutation, useUnLikeMutation } from "@/module/like/infrastructure/like.mutation";

type Props = {
  likeId?: string;
  characterId: number;
};

export function CharacterLikeButton({ likeId, characterId }: Props) {
  const { mutate: onLike, isPending: isPendingLike } = useLikeMutation();
  const { mutate: onUnLike, isPending: isPendingUnLike } = useUnLikeMutation();
  const { data: isSessionActive } = useSession();
  const [isLike, setIsLike] = useState(Boolean(likeId));

  const toggleLike = (characterId: number) => () => {
    if (!isSessionActive) {
      toast.warning("Please login to like characters");
      return;
    }

    if (likeId) {
      onUnLike({ id: likeId });
    } else {
      onLike({ characterId });
    }

    setIsLike((pre) => !pre);
  };

  const isPending = isPendingLike || isPendingUnLike;

  return (
    <Button variant={isLike ? "default" : "outline"} size="sm" className="mt-2 gap-2" onClick={toggleLike(characterId)}>
      {isPending ? <Loader2 className="animate-spin" size={16} /> : <Heart className={isLike ? "fill-current" : ""} size={16} />}
      {isLike ? "Liked" : "Like"}
    </Button>
  );
}

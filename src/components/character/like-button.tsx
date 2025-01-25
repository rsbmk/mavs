import { Heart, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

import type { LikeUser } from "@/module/like/domain/like.type";

import { Button } from "@/components/ui/button";
import { useSession } from "@/module/auth/infrastructure/auth.query";
import { useLikeMutation, useUnLikeMutation } from "@/module/like/infrastructure/like.mutation";

type Props = {
  characterId: number;
  likes: LikeUser[];
};

export function CharacterLikeButton({ characterId, likes }: Props) {
  const { mutate: onLike, isPending: isPendingLike } = useLikeMutation();
  const { mutate: onUnLike, isPending: isPendingUnLike } = useUnLikeMutation();
  const { like } = likes.find((like) => like.like.characterId === characterId) || {};
  const { data: isSessionActive } = useSession();
  const isLike = Boolean(like?.id);

  const toggleLike = (characterId: number) => () => {
    if (!isSessionActive) {
      toast.warning("Please login to like characters");
      return;
    }

    if (like?.id) {
      onUnLike({ id: like.id });
    } else {
      onLike({ characterId });
    }
  };

  const isPending = isPendingLike || isPendingUnLike;

  return (
    <Button variant={isLike ? "default" : "outline"} size="sm" className="mt-2 gap-2" onClick={toggleLike(characterId)}>
      {isPending ? <Loader2 className="animate-spin" size={16} /> : <Heart className={isLike ? "fill-current" : ""} size={16} />}
      {/* {total} */}
    </Button>
  );
}

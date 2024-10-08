import { Heart, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { useSession } from "@/module/auth/infrastructure/auth.query";
import { useLikeMutation, useUnLikeMutation } from "@/module/like/infrastructure/like.mutation";
import { useFindOneLikesByUserAndCharacter } from "@/module/like/infrastructure/like.query";

type Props = {
  characterId: number;
};

export function CharacterLikeButton({ characterId }: Props) {
  const { mutate: onLike, isPending: isPendingLike } = useLikeMutation();
  const { mutate: onUnLike, isPending: isPendingUnLike } = useUnLikeMutation();
  const { data: like, isPending: isPendingLikeData } = useFindOneLikesByUserAndCharacter(characterId);
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

  const isPending = isPendingLike || isPendingUnLike || isPendingLikeData;

  return (
    <Button variant={isLike ? "default" : "outline"} size="sm" className="mt-2 gap-2" onClick={toggleLike(characterId)}>
      {isPending ? <Loader2 className="animate-spin" size={16} /> : <Heart className={isLike ? "fill-current" : ""} size={16} />}
      {/* {like?.total ?? 0} */}
    </Button>
  );
}

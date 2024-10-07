import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useFindCommentByCharacter } from "@/module/comment/infrastructure/comment.query";
import { CharacterDetailCommentsPlaceholder } from "../placeholders";

type Props = {
  characterId?: string;
};

export function Comments({ characterId }: Props) {
  const { data: comments, isPending, isError } = useFindCommentByCharacter(characterId);

  if (isError) {
    return (
      <ScrollArea className="w-full h-64 mb-4">
        <h3 className="text-sm font-semibold italic">We could not recover the comments, perhaps because you are not logged in</h3>
      </ScrollArea>
    );
  }

  if (isPending) {
    return (
      <>
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        <CharacterDetailCommentsPlaceholder />
      </>
    );
  }

  return (
    <>
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <ScrollArea className="w-full h-64 mb-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4 mb-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>Gest</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{comment.user.username}</h4>
                  <span className="text-sm text-gray-500">{new Date(comment.createAt).toDateString()}</span>
                </div>
                <p className="mt-1">{comment.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-sm font-semibold italic">No comments yet</h4>
        )}
      </ScrollArea>
    </>
  );
}

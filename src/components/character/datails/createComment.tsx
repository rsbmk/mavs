import type { CreateComment } from "@/module/comment/domain/comment.type";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCreateComment } from "@/module/comment/infrastructure/comment.mutation";

const createCommentSchema = z.object({
  comment: z
    .string({
      message: "Comment is required",
    })
    .min(5, "Comment must be at least 5 characters long")
    .max(200, "Comment must be at most 200 characters long"),
});

type Props = {
  characterId?: string;
};

export function CreateCommentForm({ characterId }: Props) {
  const { mutate } = useCreateComment(characterId);
  const { handleSubmit, register, reset } = useForm<Pick<CreateComment, "comment">>({
    resolver: zodResolver(createCommentSchema),
  });

  const onSubmit: SubmitHandler<Pick<CreateComment, "comment">> = (data) => {
    mutate(data.comment);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
      <div className="flex items-center space-x-2">
        <Textarea {...register("comment")} placeholder="Add a comment..." className="flex-1" />
        <Button type="submit" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}

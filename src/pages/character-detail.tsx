import { Send } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Comics } from "@/components/character/datails/comics";
import { Comments } from "@/components/character/datails/comments";
import { HeaderCharacter } from "@/components/character/datails/header";
import { CharacterPlaceholder } from "@/components/character/placeholders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { URL_PARAMS } from "@/constants";
import { useQueryCharacterBy } from "@/module/character/infrastructure/character.query";

export default function CharacterDetail() {
  const { characterId } = useParams<URL_PARAMS>();
  const { data: character, isError, isPending } = useQueryCharacterBy(characterId);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // if (newComment.trim()) {
    //   const newCommentObj: Comment = {
    //     id: "",
    // avatar: "/placeholder.svg?height=40&width=40",
    // content: newComment,
    // timestamp: "Just now",
    //   };
    //   setComments([...comments, newCommentObj]);
    //   setNewComment("");
    // }
  };

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
          <form onSubmit={handleCommentSubmit} className="w-full">
            <div className="flex items-center space-x-2">
              <Textarea placeholder="Add a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className="flex-1" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

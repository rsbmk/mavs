import type { Comment } from "@/module/comment/domain/comment.type";

import { Send } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { CharacterPlaceholder } from "@/components/character/characterList.placeholder";
import { Comics } from "@/components/character/datails/comics";
import { HeaderCharacter } from "@/components/character/datails/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { URL_PARAMS } from "@/constants";
import { useQueryCharacterBy } from "@/module/character/infrastructure/character.query";

const mockComments: Comment[] = [
  { id: 1, user: "Steve Rogers", avatar: "/placeholder.svg?height=40&width=40", content: "Tony, you've outdone yourself this time!", timestamp: "2 hours ago" },
  { id: 2, user: "Natasha Romanoff", avatar: "/placeholder.svg?height=40&width=40", content: "Nice suit, Stark. Does it come in black?", timestamp: "1 hour ago" },
  { id: 3, user: "Peter Parker", avatar: "/placeholder.svg?height=40&width=40", content: "Mr. Stark, this is amazing! Can I try it on?", timestamp: "30 minutes ago" },
];

export default function CharacterDetail() {
  const { characterId } = useParams<URL_PARAMS>();
  const { data: character, isError, isPending } = useQueryCharacterBy(characterId);

  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        user: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
        content: newComment,
        timestamp: "Just now",
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
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
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          <ScrollArea className="w-full h-64 mb-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={comment.avatar} alt={comment.user} />
                  <AvatarFallback>{comment.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{comment.user}</h4>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="mt-1">{comment.content}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
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

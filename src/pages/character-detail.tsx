import type { Character } from "@/module/character/domain/character.type";
import type { Comment } from "@/module/comment/domain/comment.type";

import { useState } from "react";
import { Heart, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockCharacter: Character = {
  id: 1,
  name: "Iron Man",
  description: "Genius billionaire playboy philanthropist",
  thumbnail: "/placeholder.svg?height=400&width=300",
  comics: ["Avengers", "Iron Man", "Civil War"],
};

const mockComments: Comment[] = [
  { id: 1, user: "Steve Rogers", avatar: "/placeholder.svg?height=40&width=40", content: "Tony, you've outdone yourself this time!", timestamp: "2 hours ago" },
  { id: 2, user: "Natasha Romanoff", avatar: "/placeholder.svg?height=40&width=40", content: "Nice suit, Stark. Does it come in black?", timestamp: "1 hour ago" },
  { id: 3, user: "Peter Parker", avatar: "/placeholder.svg?height=40&width=40", content: "Mr. Stark, this is amazing! Can I try it on?", timestamp: "30 minutes ago" },
];

export default function CharacterDetail() {
  const [character] = useState<Character>(mockCharacter);
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

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

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold">{character.name}</CardTitle>
            <Button variant={isLiked ? "default" : "outline"} size="icon" onClick={handleLike}>
              <Heart className={`h-6 w-6 ${isLiked ? "fill-current" : ""}`} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <img src={character.thumbnail} alt={character.name} className="w-full h-64 object-cover rounded-lg" />
          <p className="text-lg">{character.description}</p>
          <div className="flex flex-wrap gap-2">
            {character.comics.map((comic, index) => (
              <span key={index} className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                {comic}
              </span>
            ))}
          </div>
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

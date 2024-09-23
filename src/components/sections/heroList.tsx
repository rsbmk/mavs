import type { Character } from "@/module/character/domain/character.type";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

type Props = {
  searchTerm: string;
  selectedComic: string;
};
export function HeroList({ searchTerm, selectedComic }: Props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [likedCharacters, setLikedCharacters] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const toggleLike = (id: number) => {
    setLikedCharacters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    // Simulating API call to fetch Marvel characters
    setTimeout(() => {
      const fetchedCharacters: Character[] = [
        { id: 1, name: "Iron Man", description: "Genius billionaire playboy philanthropist", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Avengers", "Iron Man"] },
        { id: 2, name: "Spider-Man", description: "Your friendly neighborhood Spider-Man", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Spider-Man", "Avengers"] },
        { id: 3, name: "Black Widow", description: "Master spy and assassin", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Avengers", "Black Widow"] },
        { id: 4, name: "Thor", description: "God of Thunder", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Avengers", "Thor"] },
        { id: 5, name: "Captain America", description: "Super-soldier and leader", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Avengers", "Captain America"] },
        { id: 6, name: "Hulk", description: "Green rage monster", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Avengers", "Hulk"] },
        { id: 7, name: "Black Panther", description: "King of Wakanda", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Avengers", "Black Panther"] },
        { id: 8, name: "Doctor Strange", description: "Master of the Mystic Arts", thumbnail: "/placeholder.svg?height=400&width=300", comics: ["Avengers", "Doctor Strange"] },
      ];
      setCharacters(fetchedCharacters);
      setFilteredCharacters(fetchedCharacters);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const filtered = characters.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedComic === "" || character.comics.includes(selectedComic)));
    setFilteredCharacters(filtered);
  }, [searchTerm, selectedComic, characters]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <Skeleton className="h-[300px] w-full" />
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))
        : filteredCharacters.map((character) => (
            <Card key={character.id} className="overflow-hidden">
              <img src={character.thumbnail} alt={character.name} className="w-full h-[300px] object-cover" />
              <CardHeader>
                <CardTitle>{character.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{character.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex flex-wrap gap-2">
                  {character.comics.map((comic) => (
                    <span key={comic} className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {comic}
                    </span>
                  ))}
                </div>
                <Button variant={likedCharacters.has(character.id) ? "default" : "outline"} size="sm" className="mt-2" onClick={() => toggleLike(character.id)}>
                  <Heart className={`mr-2 h-4 w-4 ${likedCharacters.has(character.id) ? "fill-current" : ""}`} />
                  {likedCharacters.has(character.id) ? "Liked" : "Like"}
                </Button>
              </CardFooter>
            </Card>
          ))}
    </div>
  );
}

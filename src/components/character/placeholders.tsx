import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

/**
 * A placeholder component for a character list. It renders a grid
 * of 8 character placeholder components.
 *
 * @returns A React component.
 */
export const CharacterListPlaceholder = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <CharacterPlaceholder key={index} />
    ))}
  </div>
);

/**
 * A placeholder component for a character.
 *
 * @returns A React component.
 */
export const CharacterPlaceholder = () => (
  <Card className="overflow-hidden">
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
);

/**
 * A placeholder component for a character detail comments section. It renders
 * a 3-line comment component with a skeleton loader for each comment.
 *
 * @returns A React component.
 */
export const CharacterDetailCommentsPlaceholder = () => (
  <div>
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className="flex items-start space-x-4 mb-4">
        <Avatar>
          <Skeleton className="w-12 h-12" />
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <Skeleton className="w-20 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
          <div className="grid gap-3">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

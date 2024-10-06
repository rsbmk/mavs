import { Badge } from "@/components/ui/badge";
import { Character } from "@/module/character/domain/character.type";

type Props = {
  comics: Character["comics"];
};

export function Comics({ comics }: Props) {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">Comics</h3>
      <div className="flex flex-wrap gap-2">
        {comics.items.map(({ name }, index) => {
          if (index >= 5) return null;
          return (
            <Badge key={name} variant="secondary" className="hover:bg-gray-200 cursor-text">
              {name}
            </Badge>
          );
        })}
      </div>
    </>
  );
}

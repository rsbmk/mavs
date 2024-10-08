import { CharacterList } from "@/components/sections/characterList";
import { Filters } from "@/components/sections/filters";
import { Layout } from "@/components/ui/layout";

export default function Home() {
  return (
    <Layout>
      <Filters />
      <CharacterList />
    </Layout>
  );
}

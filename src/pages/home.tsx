import { Header } from "@/components/sections/header";
import { Filters } from "@/components/sections/filters";
import { Layout } from "@/components/ui/layout";
import { CharacterList } from "@/components/sections/characterList";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Filters />
      <CharacterList />
    </Layout>
  );
}

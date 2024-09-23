import { Header } from "@/components/sections/header";
import { Filters } from "@/components/sections/filter";
import { Layout } from "@/components/ui/layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Filters />
    </Layout>
  );
}

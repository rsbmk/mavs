import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">Marvel Characters</h1>
      <div className="space-x-4">
        <Button variant="outline">
          <a href="/login">Login</a>
        </Button>
        <Button>
          <a href="/signup">Sign Up</a>
        </Button>
      </div>
    </header>
  );
}

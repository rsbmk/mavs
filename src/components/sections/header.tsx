import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "@/module/auth/infrastructure/auth.query";

export function Header() {
  const { data: isSessionActive } = useSession();
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">Marvel Characters</h1>
      {isSessionActive ? (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <div className="space-x-4">
          <Button variant="outline">
            <a href="/login">Login</a>
          </Button>
          <Button>
            <a href="/signup">Sign Up</a>
          </Button>
        </div>
      )}
    </header>
  );
}

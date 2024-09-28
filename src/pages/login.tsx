import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { INPUTS_NAMES, PATHS } from "@/constants";
import { Credentials } from "@/module/login/domain/login.types";
import { useLoginMutation } from "@/module/login/infrastructure/login.mutation";

const schemaSession = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6),
});

export default function Login() {
  const { mutate, isPending } = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: zodResolver(schemaSession),
  });

  const onSubmit: SubmitHandler<Credentials> = (data) => mutate(data);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={INPUTS_NAMES.USERNAME}>Username</Label>
              <Input {...register("username")} type="text" placeholder="Enter your username" />
              {errors.username && <small className="text-xs font-normal leading-4 text-red-400">{errors.username.message}</small>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input {...register("password")} type="password" placeholder="Enter your password" />
              {errors.password && <small className="text-xs font-normal leading-4 text-red-400">{errors.password.message}</small>}
            </div>
            <Button type="submit" className="w-full disabled:cursor-not-allowed" disabled={isPending}>
              {isPending ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Do not have an account?
            <Link to={PATHS.SIGNUP} className="text-primary hover:underline ml-2">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

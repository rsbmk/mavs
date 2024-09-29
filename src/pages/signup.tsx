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
import { SignUpCredentials } from "@/module/auth/domain/auth.types";
import { useSignUpMutation } from "@/module/auth/infrastructure/auth.mutation";

const schemaSession = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6),
  name: z.string().min(3).max(30),
});

export default function Signup() {
  const { mutate, isPending } = useSignUpMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpCredentials>({
    resolver: zodResolver(schemaSession),
  });

  const onSubmit: SubmitHandler<SignUpCredentials> = (data) => mutate(data);

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={INPUTS_NAMES.NAME}>Name</Label>
              <Input {...register("name")} type="text" placeholder="Enter your name" />
              {errors.name && <small className="text-xs font-normal leading-4 text-red-400">{errors.name.message}</small>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={INPUTS_NAMES.USERNAME}>Usernane</Label>
              <Input {...register("username")} type="text" placeholder="Enter your username" />
              {errors.username && <small className="text-xs font-normal leading-4 text-red-400">{errors.username.message}</small>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={INPUTS_NAMES.PASSWORD}>Password</Label>
              <Input {...register("password")} type="password" placeholder="Enter your password" />
              {errors.password && <small className="text-xs font-normal leading-4 text-red-400">{errors.password.message}</small>}
            </div>
            <Button type="submit" className="w-full">
              {isPending ? <Loader2 className="animate-spin" /> : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <Link to={PATHS.LOGIN} className="text-primary hover:underline ml-2">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
// import { toast } from "@/components/ui/use-toast";
import { Input } from "../../ui/input";
import { InputPassword } from "./InputPassword";

import Link from "next/link";

import WrapperCenter from "@/components/wrappers/WrapperCenter";
import Navbar_icon from "../Navbar/Navbar_icon";

const FormSchema = z.object({
  username: z.string().min(5, "username is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

type SignupPageProps = {
  loginMode: boolean;
  setLoginMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignupPage = ({ loginMode, setLoginMode }: SignupPageProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    if (typeof values.username !== "string") {
      console.log("name is not a string");
    } else {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.username,
            email: values.email,
            password: values.password,
          }),
        });
        const resData = await res.json();

        if (resData.statusCode == 409) {
          form.setError(resData.user, {
            type: "custom",
            message: resData.message,
          });
        }
        if (resData.statusCode == 200) {
          router.push("/signin");
        }
      } catch (error) {
        console.error(error + "something happen wrong");
      }
    }
  };

  return (
    <div>
      <WrapperCenter>
        <Navbar_icon />
      </WrapperCenter>
      <WrapperCenter>
        <p className="text-textDark text-sm mt-4">
          by signin you are agree to{" "}
          <Link href={"/terms"} className="text-special">
            terms
          </Link>{" "}
          and{" "}
          <Link href={"/terms"} className="text-special">
            conditions
          </Link>{" "}
        </p>
      </WrapperCenter>
      <Form {...form}>
        <form
          className="*:space-y-1 px-2 md:px-10 my-6 flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <InputPassword
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-special hover:bg-special-foreground mt-4"
          >
            Register
          </Button>
          <div className="w-full flex items-center justify-center gap-2 ">
            <p></p>
            <p className="">
              already have an account?{" "}
              <span
                className="underline text-md cursor-pointer"
                onClick={() => {
                  setLoginMode(!loginMode);
                }}
              >
                Signin
              </span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupPage;

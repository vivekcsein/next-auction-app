"use client";
import WrapperCenter from "@/components/wrappers/WrapperCenter";
import React, { useState } from "react";
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
import { Input } from "../../ui/input";
import Link from "next/link";
import { useAuth } from "../../wrappers/AuthProvider";
import { InputPassword } from "./InputPassword";
import Navbar_icon from "../Navbar/Navbar_icon";
import { signinAPI } from "@/lib/api/authAPI";

import SignupPage from "./SignupPage";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

const SigninPage = () => {
  const [loginMode, setLoginMode] = useState(true);
  const router = useRouter();
  const { isUserAuthenticated, login } = useAuth();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const res = await signinAPI(values.email, values.password);
      if (res.ok) {
        login();
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.error(error + "something happen wrong");
    }
  };
  return (
    <>
      {loginMode ? (
        <div>
          <WrapperCenter>
            <Navbar_icon />
          </WrapperCenter>
          <WrapperCenter>
            <p className="text-textDark text-sm mt-4">
              Login with <span className="font-bold">email</span> and{" "}
              <span className="font-bold">password</span>{" "}
            </p>
          </WrapperCenter>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" *:space-y-1 px-2 md:px-10 my-6 flex flex-col gap-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
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
                    <FormLabel>password</FormLabel>
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
                Login
              </Button>
              <div className="w-full flex flex-row items-center justify-center gap-2 ">
                <p className="">
                  New user? create account{" "}
                  <span
                    className="underline text-md cursor-pointer"
                    onClick={() => {
                      setLoginMode(!loginMode);
                    }}
                  >
                    Signup
                  </span>
                </p>
              </div>
            </form>
          </Form>
        </div>
      ) : (
        <SignupPage loginMode={loginMode} setLoginMode={setLoginMode} />
      )}
    </>
  );
};

export default SigninPage;

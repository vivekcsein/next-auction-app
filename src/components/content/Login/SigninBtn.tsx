import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import React from "react";

type SigninBtnProps = {
  label: string;
};
const SigninBtn = ({ label }: SigninBtnProps) => {
  return (
    <SheetTrigger asChild className="border-none shadow-none">
      <Button
        variant="default"
        size="icon"
        className=" w-fit px-3 py-1 bg-special  hover:bg-secondary   rounded-md text-textdark text-sm"
      >
        {label}
      </Button>
    </SheetTrigger>
  );
};

export default SigninBtn;

"use client";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import React from "react";

const Hamburger = () => {
  return (
    <SheetTrigger asChild className="border-none shadow-none">
      <Button
        variant="default"
        size="icon"
        className=" bg-transparent hover:bg-transparent lg:hidden"
      >
        <div className="FRNZ_Hamburger Hamburger_lazy">
          <span className="bg-special"></span>
          <span className="bg-special"></span>
          <span className="bg-special"></span>
        </div>
      </Button>
    </SheetTrigger>
  );
};

export default Hamburger;

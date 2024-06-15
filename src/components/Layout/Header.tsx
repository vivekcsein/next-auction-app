"use client";
import React, { useState } from "react";
// import Link from "next/link";
import { useAuth } from "../wrappers/AuthProvider";
import { SheetContentNow } from "../content/Login/SheetPrimitive";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Hamburger from "../content/Navbar/Hamburger";
import Navbar_mobile from "../content/Navbar/Navbar_mobile";
import Navbar_desktop from "../content/Navbar/Navbar_desktop";
import Navbar_user from "../content/Navbar/Navbar_user";
import Navbar_icon from "../content/Navbar/Navbar_icon";
import SigninPage from "../content/Login/SigninPage";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";

const Header = () => {
  const { isUserAuthenticated } = useAuth();
  // const isUserAuthenticated = true;
  const logoutFun = () => {};

  return (
    <header className="w-full h-12 flex justify-between lg:justify-evenly items-center shrink-0 px-4 md:px-6 py-8 bg-white z-[9999]   ">
      {/* mobile navigation  */}
      <Sheet>
        <Hamburger />
        <SheetContent side="left" className="bg-special">
          <Navbar_mobile />
        </SheetContent>
      </Sheet>
      {/* navbar for desktop */}
      <Navbar_icon />
      <Navbar_desktop />
      {!isUserAuthenticated ? (
        <Dialog defaultOpen={false}>
          <DialogTrigger asChild>
            <Button variant="outline">Login</Button>
          </DialogTrigger>
          <DialogContent className="  sm:max-w-[600px] rounded-lg mx-auto">
            <SigninPage />
          </DialogContent>
        </Dialog>
      ) : (
        <Navbar_user logout={logoutFun} />
      )}
    </header>
  );
};

export default Header;

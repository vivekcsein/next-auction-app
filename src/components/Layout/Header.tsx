"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../wrappers/AuthProvider";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Hamburger from "../content/Navbar/Hamburger";
import Navbar_mobile from "../content/Navbar/Navbar_mobile";
import Navbar_desktop from "../content/Navbar/Navbar_desktop";
import Navbar_user from "../content/Navbar/Navbar_user";

const Header = () => {
  const { isUserAuthenticated } = useAuth();
  // const isUserAuthenticated = true;

  const logoutFun = () => {};

  return (
    <header className="w-full h-12 flex justify-between lg:justify-evenly items-center shrink-0 px-4 md:px-6 py-8 bg-foreground ">
      {/* mobile navigation  */}
      <Sheet>
        <Hamburger />
        <SheetContent side="left" className="bg-special">
          <Navbar_mobile />
        </SheetContent>
      </Sheet>

      {/* navbar for desktop */}
      <Link href="/" className="mr-6 hidden lg:flex " prefetch={false}>
        <h1 className="text-2xl md:text-3xl font-bolder text-special">
          Micro
          <span className="text-xl md:text-2xl font-light text-secondary">
            Auction
          </span>
        </h1>
      </Link>
      <Navbar_desktop />
      {!isUserAuthenticated ? (
        <Link
          className="px-3 py-1 bg-special  hover:bg-secondary   rounded-md text-foreground text-sm"
          href="/signin"
        >
          Sign In
        </Link>
      ) : (
        <Navbar_user logout={logoutFun} />
      )}
    </header>
  );
};

export default Header;

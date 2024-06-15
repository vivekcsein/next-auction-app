import { navList } from "@/lib/constants/rootLayout";
import Link from "next/link";
import React from "react";

const Navbar_desktop = () => {
  return (
    <>
      <nav className="ml-auto hidden lg:flex justify-evenly">
        {navList.map((item, index) => {
          return (
            <Link
              href={item.href}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors  bg-transparent hover:underline animate"
              prefetch={false}
              key={`navDesktopItems${index}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar_desktop;

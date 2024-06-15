import Link from "next/link";
import React from "react";

type Navbar_iconProps = {
  clickable?: boolean;
  href?: string;
};
const Navbar_icon = ({ clickable, href }: Navbar_iconProps) => {
  return (
    <Link
      href={`${clickable ? (href ? href : "/") : ""}`}
      className="mr-6 hidden lg:flex "
      prefetch={false}
    >
      <h1 className="text-2xl md:text-3xl font-bolder text-special">
        Micro
        <span className="text-xl md:text-2xl font-light text-secondary">
          Auction
        </span>
      </h1>
    </Link>
  );
};

export default Navbar_icon;

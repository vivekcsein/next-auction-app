import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Navbar_user_dropdown from "./Navbar_user_dropdown";

type Navbar_userPrps = {
  name?: string;
  logout: () => void;
};

const Navbar_user = ({ name, logout }: Navbar_userPrps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline"> Hello {name ? name : "user"}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-special">
          <Navbar_user_dropdown onclick={logout} label="Settings" />
          <DropdownMenuSeparator />
          <Navbar_user_dropdown onclick={logout} label="logout" />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Navbar_user;

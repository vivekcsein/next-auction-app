"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";

type Navbar_user_dropdownProps = {
  label: string;
  onclick?: () => void;
};
const Navbar_user_dropdown = ({
  label,
  onclick,
}: Navbar_user_dropdownProps) => {
  return (
    <div
      onClick={() => {
        if (onclick) {
          onclick();
        }
      }}
    >
      <DropdownMenuItem className="hover:bg-special-foreground cursor-pointer">
        {label}
      </DropdownMenuItem>
    </div>
  );
};

export default Navbar_user_dropdown;

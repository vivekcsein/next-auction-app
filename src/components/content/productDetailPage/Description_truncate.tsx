"use client";
import { useState, useEffect } from "react";
import React from "react";

type TruncateProps = {
  expandedText?: string;
  compressText?: string;
  character: number;
  children: string;
  btnClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Description_truncate = ({
  children,
  expandedText = "common:text-less",
  compressText = "common:text-read-more",
  character = 150,
  btnClassName,
  onClick,
}: TruncateProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleLines = () => {
    setExpanded((prev) => !prev);
  };

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) {
      return onClick(e);
    }
    toggleLines();
  }

  return (
    <div>
        {}
      <span>
        <button
          onClick={handleClick}
          className={`mt-1 inline-block font-bold text-accent ${
            btnClassName ? btnClassName : ""
          }`}
        >
          {!expanded ? compressText : expandedText}
        </button>
      </span>
    </div>
  );
};

export default Description_truncate;

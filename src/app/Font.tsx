"use client";
import React from "react";
import { roboto, poppins } from "../lib/utils/styles";

const Font = () => {
  return (
    <>
      {" "}
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${roboto.style.fontFamily};
        }
        p,
        div,
        span,
        label {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default Font;

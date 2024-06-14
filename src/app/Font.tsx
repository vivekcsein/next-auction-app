"use client";
import React from "react";
import { roboto, poppins, lora } from "../lib/utils/styles";

const Font = () => {
  return (
    <>
      {" "}
      <style jsx global>{`
        a {
          font-family: ${lora.style.fontFamily};
        }
        p,
        div,
        label {
          font-family: ${poppins.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default Font;

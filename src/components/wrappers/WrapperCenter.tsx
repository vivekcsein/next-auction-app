import React from "react";

type WrapperCenterProps = {
  fullscreen?: boolean;
  children: React.ReactNode;
};
const WrapperCenter = ({ fullscreen, children }: WrapperCenterProps) => {
  return (
    <div
      className={`w-full flex justify-center items-center ${
        fullscreen ? "min-h-screen" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default WrapperCenter;

import React from "react";

type AssetBundle_iconProps = {
  svgData: {
    xSize: number;
    fillcolor: string;
    sidecolor: string;
    svgpath: string;
    svgsize: number;
  };
};

const AssetBundle_icon = ({ svgData }: AssetBundle_iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={svgData.svgsize}
      height={svgData.svgsize}
      fill="none"
    >
      <path
        d={svgData.svgpath}
        fill={`url(#starsvg${svgData.xSize}${svgData.fillcolor})`}
        stroke={svgData.fillcolor}
        strokeWidth="10"
      />
      <defs>
        <linearGradient
          id={`starsvg${svgData.xSize}${svgData.fillcolor}`}
          x1={svgData.xSize}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={svgData.fillcolor} />
          <stop stopColor={svgData.sidecolor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AssetBundle_icon;

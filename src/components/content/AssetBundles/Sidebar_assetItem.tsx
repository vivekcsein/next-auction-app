"use client";
import { assetItemSidebarItemList } from "@/lib/constants/assetItemList";
import { Laptop } from "lucide-react";
import React from "react";
import AssetBundle_icon from "./AssetBundle_icon";

const Sidebar_assetItem = () => {
  return (
    <>
      {/* external box */}
      <div className="flex flex-wrap max-w-[500px] justify-evenly gap-4 mt-6">
        {assetItemSidebarItemList.map((item, index) => {
          return (
            <div
              key={`${item.label}${item.id}`}
              onClick={() => {
                console.log(item.label);
              }}
            >
              {/* internal box */}
              <div className="boxshadow *:max-w-[250px] min-w-[220px] bg-white border-1 flex justify-evenly flex-col items-center gap-4 rounded-lg cursor-pointer hover:scale-105 hover:border-special hover:border-2 transition-all">
                <div className="py-1">
                  {item.image && item.image != "" ? (
                    <AssetBundle_icon
                      svgData={{
                        xSize: 0,
                        fillcolor: "",
                        sidecolor: "var(--special)",
                        svgpath: item.image,
                        svgsize: 100,
                      }}
                    />
                  ) : (
                    item.icon()
                  )}
                </div>
                <p className="py-1">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar_assetItem;

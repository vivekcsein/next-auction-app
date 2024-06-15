import React from "react";

import { assetbundlesItemList } from "../../../lib/constants/assetItemList";
import AssetBundle_card from "./AssetBundle_card";
import { cn } from "@/lib/utils/utils";
const column = "auto";

const AsetBundle_ItemList = () => {
  return (
    <div className="  w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 ">
      {assetbundlesItemList.map((item, index) => (
        <AssetBundle_card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AsetBundle_ItemList;

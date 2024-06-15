import React from "react";
import Sidebar_assetItem from "./Sidebar_assetItem";
import AsetBundle_ItemList from "./AsetBundle_ItemList";
// import AssetBundle_cardSection from "./AssetBundle_cardSection";

const Sidebar_assetbundle = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" w-full flex justify-center items-center lg:justify-normal lg:items-start lg:w-[30%] ">
        <Sidebar_assetItem />
      </div>
      <div className=" w-full px-5 lg:px-1 lg:w-[70%]">
        <AsetBundle_ItemList />
      </div>
      {/* <AssetBundle_cardSection /> */}
    </div>
  );
};

export default Sidebar_assetbundle;

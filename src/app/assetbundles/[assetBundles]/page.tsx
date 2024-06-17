import ProductDetailPage_image from "@/components/content/productDetailPage/ProductDetailPage_image";
import React from "react";
import { dummyProductDataItem } from "../../../lib/constants/dummyProductData";
import ProductDetailPage_main from "@/components/content/productDetailPage/ProductDetailPage_main";

const page = () => {
  return (
    <div className="bg-white">
      <ProductDetailPage_main item={dummyProductDataItem} />
    </div>
  );
};

export default page;

"use client";

import React from "react";
import ProductDetailPage_image from "./ProductDetailPage_image";
import { ProductDataItem } from "@/lib/constants/dummyProductData";
import ProductDetailPage_info from "./ProductDetailPage_info";
import WrapperCenter from "@/components/wrappers/WrapperCenter";

type ProductDetailPage_mainProps = {
  item: ProductDataItem;
};

const ProductDetailPage_main = ({ item }: ProductDetailPage_mainProps) => {
  const {
    name,
    minPrice,
    maxPrice,
    description,
    price,
    salePrice,
    language,
    quantity,
    inStock,
    isTaxable,
    shippingClassId,
    image,
    gallery,
  } = item;

  const productDetails = {
    id: 1,
    name: name,
    desc: description,
    details: description,
    currentprice: minPrice,
    fullprice: maxPrice,
    currentrating: 3.5,
    totalRating: 5,
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-1/2">
          <WrapperCenter>
            <ProductDetailPage_image ImagesList={gallery} />
          </WrapperCenter>
        </div>
        <div className=" w-full md:w-1/2 space-y-6 ">
          <WrapperCenter>
            <ProductDetailPage_info product={productDetails} />
          </WrapperCenter>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage_main;

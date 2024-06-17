import React from "react";
import ProductDetailPage_image from "./ProductDetailPage_image";
import { Button } from "@/components/ui/button";

type ProductDetailPage_info = {
  product: {
    id: number;
    name: string;
    details: string;
    desc: string;
    currentprice: number;
    fullprice: number;
    currentrating: number;
    totalRating: number;
  };
};
const ProductDetailPage_info = ({ product }: ProductDetailPage_info) => {
  const {
    id,
    name,
    details,
    desc,
    currentprice,
    fullprice,
    currentrating,
    totalRating,
  } = product;

  return (
    <div>
      <div className="space-y-2">
        <h2 className="text-lg font-normal tracking-tight text-heading md:text-xl xl:text-2xl cursor-pointer transition-colors hover:text-special ">
          {name}
        </h2>
        <p className=" w-full lg:w-2/3 mt-3 text-[14px] font-light leading-7 text-body md:mt-4 react-editor-description">
          {desc}
        </p>
        <div className="flex items-center mt-4">
          <p className="text-yellow-400">{currentrating}</p>
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <p className="text-sm text-gray-500 ml-2">
            {`${totalRating} Ratings`}
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex items-baseline space-x-2">
          <p className="text-3xl font-bold text-redspecial">${currentprice}</p>
          <p className="text-lg text-gray-500 line-through">${fullprice}</p>
        </div>
        <p className="text-sm text-gray-500">Incl. Vat plus shipping</p>
        <div className="flex items-center space-x-2">
          <ClockIcon className="w-5 h-5 text-gray-500" />
          <p className="text-sm text-gray-500">2-4 Day Shipping</p>
        </div>
      </div>
      <div className="flex space-x-4 space-y-4 mt-4">
        <Button className="dark:bg-special-foreground  bg-special w-2/3">
          Bid Now
        </Button>
      </div>
    </div>
  );
};
export default ProductDetailPage_info;

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// <div className="md:w-1/2">
//   <div className="mb-4">
//     <ProductDetailPage_image ImagesList={} />
//     {/* <ProductCardSideImages ImagesList={dummyImageList} /> */}
//   </div>
//   {/* <div className="flex space-x-2">
//     <Badge variant="secondary">DISPLAY</Badge>
//     <Badge variant="default">SALE</Badge>
//   </div> */}
// </div>;

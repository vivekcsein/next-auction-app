import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AssetBundle_cardTimer from "./AssetBundle_cardTimer";

type AssetBundle_cardProps = {
  item: {
    src?: string;
    name?: string;
    href?: string;
    price?: number;
    Bidding_endsby?: string;
  };
};

const AssetBundle_card = ({ item }: AssetBundle_cardProps) => {
  const { src, name, href, price, Bidding_endsby } = item;
  const currentDate = new Date();
  const biddingEndsBy = new Date(Bidding_endsby ? Bidding_endsby : currentDate);
  return (
    <div className="hover:border-special bg-white z-10 mt-10  transform overflow-hidden rounded boxshadow  bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow">
      <Link
        className="relative flex h-48 w-auto cursor-pointer items-center justify-center sm:h-64"
        href={href ? href : ""}
      >
        <Image
          src={src ? src : ""}
          alt={name ? name : "product image"}
          fill
          sizes="(max-width: 768px) 100vw"
          className="product-image object-contain"
        />
      </Link>
      {/* End of product image */}

      <header className="p-3 md:p-6">
        <div className="mb-2 flex items-center">
          <span className="text-sm font-medium text-textdark md:text-base">
            ${price}
          </span>
        </div>
        <div className="mb-2 flex items-center">
          <AssetBundle_cardTimer endTime={biddingEndsBy} />

          {/* <span className="text-xs font-medium text-textdark md:text-sm">
            Bidding close : {Bidding_endsby}
          </span> */}
        </div>

        {/* End of product price */}

        <h3 className="mb-4 cursor-pointer truncate text-xs text-body md:text-sm font-thin text-textdull">
          {name}
        </h3>
        {/* End of product title */}
        <Link href={href ? href : ""}>
          <button className="group flex h-7 w-full items-center justify-between rounded bg-special hover:bg-special-foreground text-xs text-body-dark transition-colors  hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-0 md:h-9 md:text-sm">
            <span className="flex-1 text-white">Bid Now</span>
          </button>
        </Link>
        {/* End of add to cart */}
      </header>
    </div>
  );
};

export default AssetBundle_card;

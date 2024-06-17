"use client";
import React, { useEffect, useRef, useState } from "react";
// import CategoryBadges from "./category-badges";
import Image from "next/image";

import {
  GalleryItem,
  ProductDataItem,
} from "../../../lib/constants/dummyProductData";
import { Product_courosel } from "./Product_courosel";
import Link from "next/link";
import { useCarousel } from "@/components/ui/carousel";

type ProductDetailPage_imageProps = {
  ImagesList: Array<GalleryItem>;
};

const ProductDetailPage_image = ({
  ImagesList,
}: ProductDetailPage_imageProps) => {
  const sideImageDiv = useRef<HTMLDivElement | null>(null);
  const [currentProductImage, setCurrentProductImage] = useState<GalleryItem>(
    ImagesList[0]
  );
  const [currentSideImages, setCurrentSideImages] = useState(ImagesList.length);

  const searchImageByID = (id: number) => {
    const newArr = ImagesList.filter((image) => image.id === id);
    if (!newArr.length) return ImagesList[0];
    return newArr[0];
  };

  const iconImagesClicked = (id: number) => {
    const product = searchImageByID(id);
    setCurrentProductImage(product);
  };

  useEffect(() => {
    const elem = sideImageDiv.current as HTMLDivElement;
    // console.log(typeof getComputedStyle(elem).height);
    // console.log(parseInt(getComputedStyle(elem).height, 10));

    if (
      parseInt(getComputedStyle(elem).height, 10) >= 400 &&
      currentSideImages > 4
    ) {
      elem.classList.add("scrollY");
      elem.classList.remove("scrollX");
    }
    if (
      parseInt(getComputedStyle(elem).width, 10) >= 300 &&
      currentSideImages > 4
    ) {
      elem.classList.add("scrollX");
      elem.classList.remove("scrollY");
    }

    return () => {
      elem.classList.remove("scrollX");
      elem.classList.remove("scrollY");
    };
  }, []);

  return (
    <div className="flex justify-start flex-col-reverse md:flex-row gap-5">
      <div
        className="flex flex-row md:flex-col justify-start gap-3 rounded-md"
        ref={sideImageDiv}
      >
        <Product_courosel imagesList={ImagesList} />
        {/* { {ImagesList.map((image) => {
          return (
            <div
              key={image.id}
              className="cursor-pointer"
              onClick={(e) => {
                iconImagesClicked(image.id);
              }}
              onMouseEnter={(e) => {
                iconImagesClicked(image.id);
              }}
            >
              <Image
                alt={`${image.id}`}
                src={image.original}
                width={100}
                height={100}
                className="object-cover w-full rounded-lg -top-5"
                style={{ aspectRatio: "1", objectFit: "cover" }}
              />
            </div>
          );
        })}
        } */}
      </div>

      {/* <Link href={currentProductImage.href ? currentProductImage.href : "#"}> */}
      <div className="overflow-hidden">
        {/* <Image
          src={currentProductImage.thumbnail}
          width={600}
          height={600}
          alt={currentProductImage.thumbnail}
          loading="lazy"
          className="object-cover w-full rounded-lg"
          style={{ aspectRatio: "1", objectFit: "cover" }}
          onMouseEnter={(e) => {
            // console.log(e.currentTarget);
            const target = e.currentTarget as HTMLDivElement;
            target.style.scale = "1.2";
          }}
          onMouseLeave={(e) => {
            // console.log(e.currentTarget);
            const target = e.currentTarget as HTMLDivElement;
            target.style.scale = "1";
          }}
        /> */}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductDetailPage_image;

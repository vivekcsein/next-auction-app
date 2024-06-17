"use client";
import * as React from "react";

import { GalleryItem } from "../../../lib/constants/dummyProductData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselList,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";

type Product_couroselProps = {
  imagesList: Array<GalleryItem>;
};
export function Product_courosel({ imagesList }: Product_couroselProps) {
  const [currentSideImages, setCurrentSideImages] = React.useState(0);

  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent className="  ">
        {imagesList.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                src={item.original}
                width={800}
                height={800}
                alt="iamges"
                className="hover:scale-110 transition-all cursor-pointer"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="w-full flex absolute top-[80%]   ">
        {imagesList.map((image, index) => {
          return (
            <CarouselList
              className="bg-transparent w-[200px] h-auto cursor-pointer active hover:border-2 hover:border-special "
              onClick={() => {
                setCurrentSideImages(index);
              }}
              Num={currentSideImages}
            >
              <Image
                alt={`${image.id}`}
                src={image.original}
                width={400}
                height={400}
                className="object-cover w-full rounded-lg"
                style={{ aspectRatio: "1 ", objectFit: "cover" }}
              />
            </CarouselList>
          );
        })}
      </div>
    </Carousel>
  );
}

// <div
//   key={image.id}
//   className="cursor-pointer"
//   onClick={(e) => {
//     // scrollNum(image.id);
//     // iconImagesClicked(image.id);
//   }}
// >
//   <Image
//     alt={`${image.id}`}
//     src={image.original}
//     width={100}
//     height={100}
//     className="object-cover w-full rounded-lg -top-5"
//     style={{ aspectRatio: "1", objectFit: "cover" }}
//   />
// </div>

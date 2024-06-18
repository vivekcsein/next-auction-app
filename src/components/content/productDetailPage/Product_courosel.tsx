// "use client";
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
      <div className="w-full   absolute top-[80%]  grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-3 md:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]  ">
        {imagesList.map((image, index) => {
          return (
            <CarouselList
              className="couroselListItem bg-transparent cursor-pointer border-2 border-opacity-10 border-textdull-foreground hover:border-2 hover:border-special "
              Num={index}
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

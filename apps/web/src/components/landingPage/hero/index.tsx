"use client";

import noImages from "@/assets/noImage";
import heroData from "@/data/landingPage/heroData";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-2 md:mx-4 lg:mx-6 xl:mx-8" id="home-hero">
      <Carousel
        className="flex"
        id="home-hero-carousel"
        prevArrow={({ handlePrev }) => (
          <heroData.prevArrowIcon handleNext={handlePrev} />
        )}
        nextArrow={({ handleNext }) => (
          <heroData.nextArrowIcon handleNext={handleNext} />
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-0 z-50 flex translate-x-1/3 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "w-6 bg-header-main"
                    : "w-2 bg-header-main/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {heroData.imageData.length > 0 ? (
          heroData.imageData.map(
            (
              image: {
                src: string;
                width: number | null;
                height: number | null;
                alt: string;
              },
              index: number
            ) => (
              <Image
                key={image.alt + index}
                src={image.src || noImages[2]}
                width={image.width || heroData.imageWidth || 1000}
                height={image.height || heroData.imageHeight || 500}
                alt={image.alt || heroData.imageAlt}
                aria-label={image.alt || heroData.imageAlt}
                className="mx-auto w-auto"
              />
            )
          )
        ) : (
          <Image
            src={noImages[2]}
            width={heroData.imageWidth || 1000}
            height={heroData.imageHeight || 500}
            alt={heroData.imageAlt}
            aria-label={heroData.imageAlt}
            className="mx-auto w-auto"
          />
        )}
      </Carousel>
    </div>
  );
}

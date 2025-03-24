"use client";

import { Product } from "@/interfaces/databaseTables";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ProductCard } from "./productCard";
import Paginate from "@/functions/paginate";

const PAGINATION_PAGESIZES: Array<number> = [1, 1, 2, 3, 4, 5]; // Page sizes for screen widths xs, sm, md, lg, xl, 2xl

export default function DiscountCarousel({
  products,
}: {
  products: Array<Product>;
}) {
  const paginatedProducts: Array<Array<Array<Product | null>>> =
    PAGINATION_PAGESIZES.map((pageSize: number) => {
      return Paginate(products, pageSize, null);
    });
  const carouselClasses: Array<string> = [
    "flex sm:hidden",
    "hidden sm:flex md:hidden",
    "hidden md:flex lg:hidden",
    "hidden lg:flex xl:hidden",
    "hidden xl:flex 2xl:hidden",
    "hidden 2xl:flex",
  ];

  return (
    <div id="home-fresh-carousel">
      {paginatedProducts.map(
        (productCarousel: Array<Array<Product | null>>, widthIndex: number) => (
          <Carousel
            key={"home-popular-carousel-" + widthIndex}
            className={carouselClasses[widthIndex]}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handlePrev}
                ripple
                className="!absolute top-2/4 left-2 -translate-y-2/4 bg-home-carouselArrowBg rounded-full hover:bg-home-carouselArrowBg/70"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-2 -translate-y-2/4 bg-home-carouselArrowBg rounded-full hover:bg-home-carouselArrowBg/70"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
            navigation={() => null}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {productCarousel.map(
              (productPage: Array<Product | null>, page: number) => (
                <div
                  key={"home-popular-carousel-" + widthIndex + "-page-" + page}
                  className={`mx-16 sm:mx-20 grid`}
                >
                  <div
                    className={`grid grid-cols-${
                      PAGINATION_PAGESIZES[widthIndex]
                    } grid-rows-1 justify-between ${
                      PAGINATION_PAGESIZES[widthIndex] < 2 ? "mx-auto" : ""
                    }`}
                  >
                    {productPage.map(
                      (product: Product | null, index: number) => (
                        <div
                          key={`home-popular-carousel-${widthIndex}-page-${page}-product-${index}`}
                          className={`col-start-${index + 1} row-start-1`}
                        >
                          <ProductCard product={product} />
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </Carousel>
        )
      )}
    </div>
  );
}

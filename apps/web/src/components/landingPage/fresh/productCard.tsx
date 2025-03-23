"use client";

import siteMetadata from "@/data/siteMetadata";
import { Product } from "@/interfaces/databaseTables";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
  Button,
} from "@material-tailwind/react";
import React from "react";
import noImages from "@/assets/noImage";
import Image from "next/image";
import freshData from "@/data/landingPage/freshData";

export function ProductCard({ product }: { product: Product | null }) {
  if (!product) {
    return (
      <Card className="w-56 h-[19rem] mx-auto bg-transparent shadow-none">
        {null}
      </Card>
    );
  } else {
    return (
      <Card className="w-56 h-[19rem] mx-auto bg-white shadow-none border border-home-freshCardBorder rounded-2xl">
        <CardHeader
          shadow={false}
          floated={false}
          className="rounded-none mt-5 mx-3 w-auto"
        >
          {noImages.includes(product.image) ? (
            <Image
              src={noImages[2]}
              width={70}
              height={90}
              alt={
                siteMetadata.locale === "id-ID" || !product.nameEN
                  ? product.nameID
                  : product.nameEN
              }
              aria-label={
                siteMetadata.locale === "id-ID" || !product.nameEN
                  ? product.nameID
                  : product.nameEN
              }
              className="h-full w-full object-cover"
              priority
            />
          ) : (
            <Image
              src={product.image}
              width={70}
              height={90}
              alt={
                siteMetadata.locale === "id-ID" || !product.nameEN
                  ? product.nameID
                  : product.nameEN
              }
              aria-label={
                siteMetadata.locale === "id-ID" || !product.nameEN
                  ? product.nameID
                  : product.nameEN
              }
              className="h-full w-full object-cover"
              priority
            />
          )}
        </CardHeader>
        <CardBody className="pt-2 pb-0 px-3 mb-auto">
          <div className="flex flex-col gap-2 justify-start">
            <div className="flex flex-col gap-0">
              <Typography
                color="black"
                aria-label={
                  siteMetadata.locale === "id-ID" || !product.nameEN
                    ? product.nameID
                    : product.nameEN
                }
                className="font-normal font-sans normal-case"
              >
                {siteMetadata.locale === "id-ID" || !product.nameEN
                  ? product.nameID
                  : product.nameEN}
              </Typography>
              <Typography
                color="black"
                aria-label={
                  siteMetadata.locale === "id-ID" || !product.unitEN
                    ? product.unitID
                    : product.unitEN
                }
                className="font-normal font-sans normal-case"
              >
                {siteMetadata.locale === "id-ID" || !product.unitEN
                  ? product.unitID
                  : product.unitEN}
              </Typography>
            </div>
            <div className="flex flex-row">
              <Rating
                value={product.rating}
                readonly
                className="scale-[0.8] origin-left"
                ratedIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-home-rating-on fill-home-rating-on mx-[0.1rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                }
                unratedIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-home-rating-off fill-home-rating-off"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                }
              />
              <Typography className="font-normal font-sans normal-case my-auto text-sm text-home-rating-value -translate-x-4">
                <span>{`(${product.rating})`}</span>
              </Typography>
            </div>
            <div className="flex flex-row justify-between">
              <Typography
                aria-label={new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(product.price)}
                className="font-bold font-sans normal-case my-auto text-lg text-black"
              >
                <span>
                  Rp{product.price.toLocaleString(siteMetadata.locale)}
                </span>
              </Typography>
              <Button className="flex flex-row justify-between w-[5.5rem] bg-home-freshAddToCardBG py-1 px-2 rounded-none shadow-none">
                <freshData.addIcon className="text-black size-4 my-auto" />
                <Typography className="my-auto text-nowrap font-mono normal-case text-sm font-medium text-black">
                  {siteMetadata.locale === "id-ID"
                    ? freshData.addID
                    : freshData.addEN}
                </Typography>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

"use client";

import siteMetadata from "@/data/siteMetadata";
import { Product } from "@/interfaces/databaseTables";
import {
  Card,
  CardHeader,
  CardBody,
  Rating,
  Button,
} from "@material-tailwind/react";
import React from "react";
import noImages from "@/assets/noImage";
import Image from "next/image";
import freshData from "@/data/landingPage/freshData";
import { RatingsOff, RatingsOn } from "@/assets/icons/ratings";

export function ProductCard({ product }: { product: Product | null }) {
  if (!product) {
    return (
      <Card
        className="w-56 h-[19rem] mx-auto bg-transparent shadow-none"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {null}
      </Card>
    );
  } else {
    return (
      <Card
        className="w-56 h-[19rem] mx-auto bg-white shadow-none border border-home-freshCardBorder rounded-2xl"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="rounded-none mt-5 mx-3 w-auto"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
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
        <CardBody
          className="pt-2 pb-0 px-3 mb-auto"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="flex flex-col gap-2 justify-start">
            <div className="flex flex-col gap-0">
              <span
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
              </span>
              <span
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
              </span>
            </div>
            <div className="flex flex-row">
              <Rating
                value={product.rating}
                readonly
                className="scale-[0.8] origin-left"
                ratedIcon={
                  <RatingsOn className="size-6 text-home-rating-on fill-home-rating-on mx-[0.1rem]" />
                }
                unratedIcon={
                  <RatingsOff className="size-6 text-home-rating-off fill-home-rating-off" />
                }
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              <span className="font-normal font-sans normal-case my-auto text-sm text-home-rating-value -translate-x-4">
                <span>{`(${product.rating})`}</span>
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span
                aria-label={new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(product.price)}
                className="font-bold font-sans normal-case my-auto text-lg text-black"
              >
                <span>
                  Rp{product.price.toLocaleString(siteMetadata.locale)}
                </span>
              </span>
              <Button
                onClick={() => freshData.addAction(product)}
                aria-label={
                  siteMetadata.locale === "id-ID"
                    ? freshData.addID
                    : freshData.addEN
                }
                className="flex flex-row justify-between w-[5.5rem] bg-home-freshAddToCardBG py-1 px-2 rounded-sm shadow-none hover:shadow-none"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <freshData.addIcon className="text-black size-[0.85rem] my-auto" />
                <span className="my-auto text-nowrap font-mono normal-case text-sm font-medium text-black">
                  {siteMetadata.locale === "id-ID"
                    ? freshData.addID
                    : freshData.addEN}
                </span>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

"use client";

import siteMetadata from "@/data/siteMetadata";
import discountsData from "@/data/landingPage/discountsData";
import { Product } from "@/interfaces/databaseTables";
import {
  Card,
  CardHeader,
  CardBody,
  Rating,
  Button,
  Progress,
  Badge,
} from "@material-tailwind/react";
import React from "react";
import noImages from "@/assets/noImage";
import Image from "next/image";
import { RatingsOff, RatingsOn } from "@/assets/icons/ratings";

export function ProductCard({ product }: { product: Product | null }) {
  if (!product) {
    return (
      <Card className="w-56 h-[24.3rem] mx-auto bg-transparent shadow-none">
        {null}
      </Card>
    );
  } else {
    return (
      <Badge
        content={
          siteMetadata.locale === "id-ID"
            ? `Dis kon ${product.discount}%`
            : `${product.discount}% Dis count`
        }
        placement="top-start"
        aria-label={
          siteMetadata.locale === "id-ID"
            ? `Diskon ${product.discount}%`
            : `${product.discount}% Discount`
        }
        className="bg-home-discountBadge font-semibold text-[0.9rem] text-center leading-tight top-0 left-0 translate-x-0 translate-y-0 w-12 rounded-2xl rounded-br-none p-2"
      >
        <Card className="w-56 h-[24.3rem] mx-auto bg-white shadow-none border border-home-freshCardBorder rounded-2xl">
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
            <div className="flex flex-col gap-2 justify-between">
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
                />
                <span className="font-normal font-sans normal-case my-auto text-sm text-home-rating-value -translate-x-4">
                  <span>{`(${product.rating})`}</span>
                </span>
              </div>
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
              <div
                aria-label={`
                  ${
                    siteMetadata.locale === "id-ID"
                      ? discountsData.soldID
                      : discountsData.soldEN
                  }: ${product.maxStock - product.stock}/${product.maxStock}`}
                className="flex flex-col gap-1 my-1"
              >
                <Progress
                  value={
                    ((product.maxStock - product.stock) * 100) /
                    product.maxStock
                  }
                  size="sm"
                  className="*:bg-home-salesProgressBar h-[0.3rem]"
                />
                <span className="font-medium font-sans text-[0.75rem] text-home-salesProgressBar">
                  <span>
                    {siteMetadata.locale === "id-ID"
                      ? discountsData.soldID
                      : discountsData.soldEN}
                    : {product.maxStock - product.stock}/{product.maxStock}
                  </span>
                </span>
              </div>
              <Button
                onClick={() => discountsData.addAction(product)}
                aria-label={
                  siteMetadata.locale === "id-ID"
                    ? discountsData.addID
                    : discountsData.addEN
                }
                className="flex flex-row justify-between w-full bg-home-addToCardBg py-[0.4rem] px-4 text-white rounded-sm shadow-none hover:shadow-none"
              >
                <discountsData.addIcon className="size-[0.85rem] my-auto fill-white" />
                <span className="my-auto text-nowrap font-mono normal-case text-sm font-medium">
                  {siteMetadata.locale === "id-ID"
                    ? discountsData.addID
                    : discountsData.addEN}
                </span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </Badge>
    );
  }
}

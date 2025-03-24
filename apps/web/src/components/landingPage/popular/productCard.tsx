"use client";

import siteMetadata from "@/data/siteMetadata";
import { Product } from "@/interfaces/databaseTables";
import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import React from "react";
import noImages from "@/assets/noImage";
import Image from "next/image";
import popularData from "@/data/landingPage/popularData";

export function ProductCard({ product }: { product: Product | null }) {
  if (!product) {
    return (
      <Card className="w-40 h-52 mx-auto bg-transparent shadow-none">
        {null}
      </Card>
    );
  } else {
    return (
      <Card className="w-40 h-52 mx-auto bg-home-popularCard shadow-none rounded-2xl">
        <CardHeader
          shadow={false}
          floated={false}
          className="rounded-none mt-6 mx-3 w-auto"
        >
          {noImages.includes(product.image) ? (
            <Image
              src={noImages[0]}
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
        <CardBody className="pt-4 pb-0 mb-6">
          <div className="flex flex-col">
            <span
              color="black"
              aria-label={
                siteMetadata.locale === "id-ID" || !product.nameEN
                  ? product.nameID
                  : product.nameEN
              }
              className="font-normal font-sans normal-case mx-auto"
            >
              {siteMetadata.locale === "id-ID" || !product.nameEN
                ? product.nameID
                : product.nameEN}
            </span>
            <span
              color="black"
              aria-label={product.stock.toString()}
              className="font-normal font-sans normal-case mx-auto text-base text-home-stockText"
            >
              <span>
                {product.stock}{" "}
                {siteMetadata.locale === "id-ID"
                  ? popularData.stockID
                  : popularData.stockEN}
              </span>
            </span>
          </div>
        </CardBody>
      </Card>
    );
  }
}

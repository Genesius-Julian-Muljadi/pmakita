"use client";

import siteMetadata from "@/data/siteMetadata";
import { Product } from "@/interfaces/databaseTables";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import noImages from "@/assets/noImage";
import Image from "next/image";
import popularData from "@/data/landingPage/popularData";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-40 h-52 mx-auto bg-home-popularCard">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-auto w-full rounded-b-none mt-6"
      >
        {noImages.includes(product.image) ? (
          <Image
            src={noImages[0]}
            width={70}
            height={90}
            alt={product.name}
            aria-label={product.name}
            className="h-full w-full object-cover"
            priority
          />
        ) : (
          <Image
            src={product.image}
            width={70}
            height={90}
            alt={product.name}
            aria-label={product.name}
            className="h-full w-full object-cover"
            priority
          />
        )}
      </CardHeader>
      <CardBody className="pt-4 pb-0 mb-6">
        <div className="flex flex-col">
          <Typography
            color="black"
            aria-label={product.name}
            className="font-normal font-sans normal-case mx-auto"
          >
            {product.name}
          </Typography>
          <Typography
            color="black"
            aria-label={product.stock.toString()} 
            className="font-normal font-sans normal-case mx-auto text-base text-home-stockText"
          >
            <span>
            {product.stock} {siteMetadata.locale === "id-ID" ? popularData.stockID : popularData.stockEN}</span>
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

"use client";

import siteMetadata from "@/data/siteMetadata";
import { Product } from "@/interfaces/databaseTables";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { ProductSamples } from "@/data/samples/productSamples";
import { CldImage } from "next-cloudinary";
import noImages from "@/assets/noImage";
import Image from "next/image";

export function ProductCard({
  product,
  dashboard,
  allProducts,
}: {
  product: Product;
  dashboard?: boolean;
  allProducts?: Array<Product>;
}) {
  return (
    <Card className="w-full max-w-[30rem] mx-auto bg-productCard-light dark:bg-productCard-dark dark:shadow-gray-800">
      {dashboard ? (
        <div
          aria-label="Product speed dial"
          className="absolute bottom-4 right-4 rounded-full z-40"
        >
        </div>
      ) : null}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-auto w-full rounded-b-none"
      >
        {noImages.includes(product.image) ? (
          <Image
            src={noImages[0]}
            width={500}
            height={800}
            alt={product.name}
            aria-label={product.name}
            className="h-full w-full object-cover"
            priority
          />
        ) : (
          <CldImage
            src={product.image}
            width={500}
            height={800}
            alt={product.name}
            aria-label={product.name}
            className="h-full w-full object-cover"
            priority
          />
        )}
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            aria-label={product.name}
            className="font-extrabold dark:text-blue-gray-50 uppercase"
          >
            {product.name}
          </Typography>
          <Typography
            color="blue-gray"
            aria-label={Intl.DateTimeFormat(siteMetadata.locale, {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(new Date(product.dateCreated))}
            className="font-semibold dark:text-blue-gray-50"
          >
            {Intl.DateTimeFormat(siteMetadata.locale, {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(new Date(product.dateCreated))}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="blue-gray"
          aria-label={product.overview || ""}
          className="font-medium dark:text-blue-gray-50 normal-case"
        >
          {product.overview || ""}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          aria-label={product.desc || ""}
          className="font-normal opacity-75 dark:text-gray-50"
        >
          {product.desc || ""}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {null}
      </CardFooter>
    </Card>
  );
}

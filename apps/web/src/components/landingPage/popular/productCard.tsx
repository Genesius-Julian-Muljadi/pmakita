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

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-40 h-48 border border-red-500 mx-auto bg-productCard-light dark:bg-productCard-dark dark:shadow-gray-800">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-auto w-full rounded-b-none"
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
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          {/* <Typography
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
          </Typography> */}
        </div>
      </CardBody>
    </Card>
  );
}

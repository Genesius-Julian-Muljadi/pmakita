"use client";

import { Product } from "@/interfaces/databaseTables";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import { ProductCard } from "./productCard";

const PAGINATION_PAGESIZE: number = 7;

export default function PopularCarousel({
  products,
}: {
  products: Array<Product>;
}) {

  const paginatedProducts: Array<Array<Product>> = [];

  return (
    <Carousel className="rounded-xl">
      {products.map((product: Product, index: number) => (
        <ProductCard key={product.name + index} product={product} />
      ))}
    </Carousel>
  );
}

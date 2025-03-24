import siteMetadata from "@/data/siteMetadata";
import popularData from "@/data/landingPage/popularData";
import { Product } from "@/interfaces/databaseTables";
import Link from "@/components/Link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PopularCarousel from "./carousel";
import { ProductSamples } from "@/data/samples/productSamples";

export default function Popular({ products }: { products?: Array<Product> }) {
  const popularProducts: Array<Product> = (products || ProductSamples).filter(
    (product: Product) => product.popular
  );

  return (
    <div className="flex flex-col gap-11" id="home-popular">
      <div
        className="flex flex-row justify-between mx-2 md:mx-4 lg:mx-6 xl:mx-8 border-b border-footer-main"
        id="home-popular-header"
      >
        <div className="w-72 text-2xl font-bold font-sans my-auto border-b-2 border-header-main py-4 translate-y-[0.1rem]">
          {siteMetadata.locale === "id-ID"
            ? popularData.headerTitleID
            : popularData.headerTitleEN}
        </div>
        <Link
          href={popularData.sideLinkHref || "/"}
          className="flex flex-row gap-2 text-header-main/70 my-auto translate-y-1"
        >
          <span className="text-lg text-nowrap font-sans m-auto">
            {siteMetadata.locale === "id-ID"
              ? popularData.sideLinkID
              : popularData.sideLinkEN}
          </span>
          <ChevronRightIcon className="size-5 m-auto" />
        </Link>
      </div>
      <PopularCarousel products={popularProducts} />
    </div>
  );
}

import siteMetadata from "@/data/siteMetadata";
import discountsData from "@/data/landingPage/discountsData";
import { Product } from "@/interfaces/databaseTables";
import Link from "@/components/Link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import DiscountCarousel from "./carousel";
import { ProductSamples } from "@/data/samples/productSamples";

export default function Discounts({ products }: { products?: Array<Product> }) {
  const discountsProducts: Array<Product> = (products || ProductSamples).filter(
    (product: Product) => typeof product.discount === "number"
  );

  return (
    <div className="mt-6 flex flex-col gap-11" id="home-fresh">
      <div
        className="flex flex-row justify-between mx-2 md:mx-4 lg:mx-6 xl:mx-8 border-b border-footer-main"
        id="home-fresh-header"
      >
        <div className="w-56 sm:w-72 text-xl sm:text-2xl font-bold font-sans my-auto border-b-2 border-header-main py-4 translate-y-[0.1rem] text-nowrap">
          {siteMetadata.locale === "id-ID"
            ? discountsData.headerTitleID
            : discountsData.headerTitleEN}
        </div>
        <Link
          href={discountsData.sideLinkHref || "/"}
          className="flex flex-row gap-1 sm:gap-2 text-header-main/70 my-auto translate-y-1"
        >
          <span className="text-base sm:text-lg text-nowrap font-sans m-auto">
            {siteMetadata.locale === "id-ID"
              ? discountsData.sideLinkID
              : discountsData.sideLinkEN}
          </span>
          <ChevronRightIcon className="size-4 sm:size-5 m-auto" />
        </Link>
      </div>
      <DiscountCarousel products={discountsProducts} />
    </div>
  );
}

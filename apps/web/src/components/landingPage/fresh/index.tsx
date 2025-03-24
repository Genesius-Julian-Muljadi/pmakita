import siteMetadata from "@/data/siteMetadata";
import freshData from "@/data/landingPage/freshData";
import { Product } from "@/interfaces/databaseTables";
import Link from "@/components/Link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import FreshCarousel from "./carousel";
import { ProductSamples } from "@/data/samples/productSamples";

export default function Fresh({ products }: { products?: Array<Product> }) {
  const freshProducts: Array<Product> = (products || ProductSamples).filter(
    (product: Product) => product.fresh
  );

  return (
    <div className="mt-6 flex flex-col gap-11" id="home-fresh">
      <div
        className="flex flex-row justify-between mx-2 md:mx-4 lg:mx-6 xl:mx-8 border-b border-footer-main"
        id="home-fresh-header"
      >
        <div className="w-72 text-2xl font-bold font-sans my-auto border-b-2 border-header-main py-4 translate-y-[0.1rem]">
          {siteMetadata.locale === "id-ID"
            ? freshData.headerTitleID
            : freshData.headerTitleEN}
        </div>
        <Link
          href={freshData.sideLinkHref || "/"}
          className="flex flex-row gap-2 text-header-main/70 my-auto translate-y-1"
        >
          <span className="text-lg text-nowrap font-sans m-auto">
            {siteMetadata.locale === "id-ID"
              ? freshData.sideLinkID
              : freshData.sideLinkEN}
          </span>
          <ChevronRightIcon className="size-5 m-auto" />
        </Link>
      </div>
      <FreshCarousel products={freshProducts} />
    </div>
  );
}

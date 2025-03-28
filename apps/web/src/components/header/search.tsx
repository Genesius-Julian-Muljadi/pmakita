"use client";

import headerData from "@/data/headerData";
import siteMetadata from "@/data/siteMetadata";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("searchtext", term);
    } else {
      params.delete("searchtext");
    }
    router.replace(`${pathName}?${params.toString()}`);
  }, 500);

  return (
    <div
      aria-label="Search"
      className="relative flex flex-1 flex-shrink-0 sm:w-[55vw] sm:min-w-96"
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="hidden sm:block peer w-full rounded-lg border border-gray-200 bg-header-search-bg py-2 lg:py-3 pl-10 text-sm outline-2 placeholder:text-header-search-placeholder"
        placeholder={
          siteMetadata.locale === "id-ID"
            ? headerData.searchPlaceholderID
            : headerData.searchPlaceholderEN
        }
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("searchtext")?.toString()}
      />
      <input
        className="block sm:hidden peer w-full rounded-lg border border-gray-200 bg-header-search-bg py-1.5 pl-10 text-[0.75rem] outline-2 placeholder:text-header-search-placeholder"
        placeholder={
          siteMetadata.locale === "id-ID"
            ? headerData.searchPlaceholderSmID
            : headerData.searchPlaceholderSmEN
        }
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("searchtext")?.toString()}
      />
      <button
        aria-label="Search"
        onClick={() =>
          headerData.searchAction(searchParams.get("searchtext")?.toString())
        }
        className="absolute left-3 top-1/2 scale-150 origin-center -translate-y-1/2 hover:bg-black/5 active:bg-black/10 rounded-md"
      >
        <MagnifyingGlassIcon className="scale-75 origin-center h-[18px] w-[18px] text-header-main/90 peer-focus:text-header-main" />
      </button>
    </div>
  );
}

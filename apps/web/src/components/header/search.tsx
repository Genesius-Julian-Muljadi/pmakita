"use client";

import headerData from "@/data/headerData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
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
    <div className="relative flex flex-1 flex-shrink-0 w-[55vw] min-w-96">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-lg border border-gray-200 bg-header-search-bg py-[12px] pl-10 text-sm outline-2 placeholder:text-header-search-placeholder"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("searchtext")?.toString()}
      />
      <button
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

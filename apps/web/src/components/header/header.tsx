"use client";

import siteMetadata from "@/data/siteMetadata";
import headerData from "@/data/headerData";
import Link from "@/components/Link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AccessTokenUser } from "@/interfaces/accesstokens";
import { Provider, useSelector } from "react-redux";
import { store } from "@/redux/store";
import Image from "next/image";
import noImages from "@/assets/noImage";
import Search from "./search";
import { useSearchParams } from "next/navigation";
import { Button } from "@material-tailwind/react";

function Header({ token }: { token: AccessTokenUser | null }) {
  // const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const searchParams = useSearchParams();
  const query: string = searchParams.get("category") || "";

  try {
    return (
      <header
        className={headerData.sticky ? "sticky top-0 z-50" : ""}
        id="global-header"
      >
        <div className="w-full h-36 px-4 sm:px-6 xl:px-8 flex flex-row gap-2 justify-evenly items-center max-w-full bg-header-main">
          <Link
            href="/"
            className="hidden md:block mx-0 md:mx-2 lg:mx-4"
            id="header-logo"
          >
            <Image
              src={headerData.logo || noImages[1]}
              width={headerData.logoWidth || 96}
              height={headerData.logoHeight || 144}
              alt={headerData.logoAlt}
              className="h-full w-full object-cover"
              priority
            />
          </Link>
          <div
            className="flex flex-row gap-2 md:gap-4 lg:gap-6 my-auto ml-3 md:ml-10"
            id="header-search"
          >
            <span className="hidden md:block font-semibold font-sans my-auto text-white">
              {siteMetadata.locale === "id-ID"
                ? headerData.searchDescID
                : headerData.searchDescEN}
            </span>
            <Search
              placeholder={
                siteMetadata.locale === "id-ID"
                  ? headerData.searchPlaceholderID
                  : headerData.searchPlaceholderEN
              }
            />
            {/* Component list of search results. Use query const to get search query */}
          </div>
          <div className="px-6 border-r border-white" id="header-cart">
            <headerData.cartIcon className="size-8 text-white" />
          </div>
          <div
            className="grid grid-cols-2 grid-rows-1 gap-4 px-4"
            id="header-login-register"
          >
            <Button
              size="sm"
              className="normal-case font-extrabold font-sans outline outline-header-main bg-white text-header-main hover:bg-header-main hover:text-white hover:outline-white"
            >
              {siteMetadata.locale === "id-ID"
                ? headerData.loginButtonID
                : headerData.loginButtonEN}
            </Button>
            <Button
              size="sm"
              className="normal-case font-extrabold font-sans outline outline-white bg-header-main text-white hover:bg-white hover:text-header-main hover:outline-header-main"
            >
              {siteMetadata.locale === "id-ID"
                ? headerData.signupButtonID
                : headerData.signupButtonEN}
            </Button>
          </div>
        </div>
      </header>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default function HeaderProvider({
  token,
}: {
  token: AccessTokenUser | null;
}) {
  return (
    <Provider store={store}>
      <Header token={token} />
    </Provider>
  );
}

"use client";

import siteMetadata from "@/data/siteMetadata";
import headerData from "@/data/headerData";
import Link from "@/components/Link";
import { useCookies } from "react-cookie";
import { AccessTokenUser } from "@/interfaces/accesstokens";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Image from "next/image";
import noImages from "@/assets/noImage";
import Search from "./search";
import { useSearchParams } from "next/navigation";
import { Button } from "@material-tailwind/react";

function Header({ token }: { token: AccessTokenUser | null }) {
  // const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const searchParams = useSearchParams();
  const query: string = searchParams.get("searchtext") || "";

  try {
    return (
      <header
        className={headerData.sticky ? "sticky top-0 z-50" : ""}
        id="global-header"
      >
        <div className="w-full h-36 px-2 sm:px-6 xl:px-8 flex flex-row gap-2 justify-evenly items-center max-w-full bg-header-main">
          <Link
            href="/"
            aria-label={headerData.logoAlt}
            className="mx-0 md:mx-2 lg:mx-4"
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
          <div className="flex flex-col lg:flex-row gap-x-2 gap-y-4">
            <div
              className="flex flex-row gap-2 md:gap-4 lg:gap-6 my-auto ml-3 md:ml-10"
              id="header-search"
            >
              <span className="hidden md:block lg:hidden 2xl:block font-semibold font-sans my-auto text-white">
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
            <div className="flex flex-row my-auto ml-auto">
              <div
                className="px-6 border-r border-white m-auto"
                id="header-cart"
              >
                <headerData.cartIcon className="fill-white size-6" />
              </div>
              <div
                className="flex flex-row lg:flex-col 2xl:flex-row gap-4 px-4 m-auto"
                id="header-login-register"
              >
                <Button
                  size="sm"
                  aria-label={
                    siteMetadata.locale === "id-ID"
                      ? headerData.loginButtonID
                      : headerData.loginButtonEN
                  }
                  className="grid p-0 h-[1.8rem] w-[4.3rem] normal-case font-extrabold font-sans outline outline-header-main bg-white text-header-main hover:bg-header-main hover:text-white hover:outline-white"
                >
                  <span className="m-auto">
                    {siteMetadata.locale === "id-ID"
                      ? headerData.loginButtonID
                      : headerData.loginButtonEN}
                  </span>
                </Button>
                <Button
                  size="sm"
                  aria-label={
                    siteMetadata.locale === "id-ID"
                      ? headerData.signupButtonID
                      : headerData.signupButtonEN
                  }
                  className="grid p-0 h-[1.8rem] w-[4.3rem] normal-case font-extrabold font-sans outline outline-white bg-header-main text-white hover:bg-white hover:text-header-main hover:outline-header-main"
                >
                  <span className="m-auto">
                    {siteMetadata.locale === "id-ID"
                      ? headerData.signupButtonID
                      : headerData.signupButtonEN}
                  </span>
                </Button>
              </div>
            </div>
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

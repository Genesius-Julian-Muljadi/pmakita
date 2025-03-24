"use client";

import siteMetadata from "@/data/siteMetadata";
import footerData from "@/data/footerData";
import Link from "@/components/Link";
import Image from "next/image";

export function Footer() {
  const gap = (
    <div className="border-[1.5px] border-footer-gap rounded-md w-44" />
  );

  return (
    <footer
      className="mt-14 mb-10 pt-16 pb-12 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-footer-bg text-wrap 2xl:text-nowrap"
      id="global-footer"
    >
      <div className="container grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-y-4 gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-20 *:w-52 justify-items-center">
        <div className="flex flex-col gap-2" id="footer-section-1">
          <span
            aria-label={
              siteMetadata.locale === "id-ID"
                ? footerData.section_1TitleID
                : footerData.section_1TitleEN
            }
            className="font-normal font-sans normal-case text-xl text-black"
          >
            {siteMetadata.locale === "id-ID"
              ? footerData.section_1TitleID
              : footerData.section_1TitleEN}
          </span>
          {gap}
          <div className="mt-3 text-md text-footer-li font-sans font-normal flex flex-col gap-2">
            {footerData.section_1Content.map(
              (
                content: { href: string; titleID: string; titleEN: string },
                index: number
              ) => (
                <Link
                  key={content.titleID + index}
                  href={content.href}
                  aria-label={
                    siteMetadata.locale === "id-ID"
                      ? content.titleID
                      : content.titleEN
                  }
                  className="mr-auto"
                >
                  <span>
                    {siteMetadata.locale === "id-ID"
                      ? content.titleID
                      : content.titleEN}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2" id="footer-section-2">
          <span
            aria-label={
              siteMetadata.locale === "id-ID"
                ? footerData.section_2TitleID
                : footerData.section_2TitleEN
            }
            className="font-normal font-sans normal-case text-xl text-black"
          >
            {siteMetadata.locale === "id-ID"
              ? footerData.section_2TitleID
              : footerData.section_2TitleEN}
          </span>
          {gap}
          <div className="mt-3 text-md text-footer-li font-sans font-normal flex flex-col gap-2">
            {footerData.section_2Content.map(
              (
                content: { href: string; titleID: string; titleEN: string },
                index: number
              ) => (
                <Link
                  key={content.titleID + index}
                  href={content.href}
                  aria-label={
                    siteMetadata.locale === "id-ID"
                      ? content.titleID
                      : content.titleEN
                  }
                  className="mr-auto"
                >
                  <span>
                    {siteMetadata.locale === "id-ID"
                      ? content.titleID
                      : content.titleEN}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2" id="footer-section-3">
          <span
            aria-label={
              siteMetadata.locale === "id-ID"
                ? footerData.section_3TitleID
                : footerData.section_3TitleEN
            }
            className="font-normal font-sans normal-case text-xl text-black"
          >
            {siteMetadata.locale === "id-ID"
              ? footerData.section_3TitleID
              : footerData.section_3TitleEN}
          </span>
          {gap}
          <div className="mt-3 text-md text-footer-li font-sans font-normal flex flex-col gap-4">
            {footerData.section_3Content.map(
              (
                content: {
                  href: string;
                  titleID: string;
                  titleEN: string;
                  icon: any;
                  phone: string;
                },
                index: number
              ) => (
                <Link
                  key={content.titleID + index}
                  href={content.href}
                  aria-label={
                    (siteMetadata.locale === "id-ID"
                      ? content.titleID
                      : content.titleEN) + ` ${content.phone}`
                  }
                  className="mr-auto flex flex-row gap-2"
                >
                  <content.icon className="size-6" />
                  <div className="flex flex-col">
                    <span>
                      {siteMetadata.locale === "id-ID"
                        ? content.titleID
                        : content.titleEN}
                    </span>
                    <span>{content.phone}</span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2" id="footer-section-4">
          <span
            aria-label={
              siteMetadata.locale === "id-ID"
                ? footerData.section_4TitleID
                : footerData.section_4TitleEN
            }
            className="font-normal font-sans normal-case text-xl text-black"
          >
            {siteMetadata.locale === "id-ID"
              ? footerData.section_4TitleID
              : footerData.section_4TitleEN}
          </span>
          {gap}
          <div className="mt-3 text-md text-footer-li font-sans font-normal flex flex-col gap-6">
            {footerData.section_4Content.map(
              (
                content: {
                  href: string;
                  icon: any;
                  alt: string;
                },
                index: number
              ) => (
                <Link
                  key={"section_4-" + index}
                  href={content.href}
                  aria-label={content.alt}
                  className="w-40"
                >
                  <Image
                    src={content.icon}
                    alt={content.alt}
                    height={100}
                    width={300}
                    className="w-full h-full object-covert"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

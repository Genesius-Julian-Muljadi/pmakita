"use client";

import { useState } from "react";
import discountsData from "@/data/landingPage/discountsData";
import siteMetadata from "@/data/siteMetadata";

export default function DiscountTimer({ deadline }: { deadline: Date }) {
  const [distance, setDistance] = useState<string>("");

  function distanceFormat(deadline: Date): string {
    let output: string = "";

    const distanceNumber: number = deadline.getTime() - new Date().getTime();
    if (distanceNumber <= 0) {
      clearInterval(countDown);
      return siteMetadata.locale === "id-ID"
        ? discountsData.timerExpiredID
        : discountsData.timerExpiredEN;
    }

    const days = Math.floor(distanceNumber / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distanceNumber % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distanceNumber % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distanceNumber % (1000 * 60)) / 1000);

    if (days > 0) {
      output += days + ":";
    }
    if (hours > 0 || days > 0) {
      output += (hours < 10 ? "0" : "") + hours + ":";
    }
    if (minutes > 0 || hours > 0 || days > 0) {
      output += (minutes < 10 ? "0" : "") + minutes + ":";
    }
    output += (seconds < 10 ? "0" : "") + seconds;

    return output;
  }

  const countDown = setInterval(function () {
    setDistance(distanceFormat(deadline));
  }, 1000);

  return (
    <div className="hidden md:flex flex-row mt-auto mb-[0.3rem] *:my-auto gap-6 h-fit bg-home-discountTimer rounded-[0.2rem] px-1 py-2 text-white font-medium">
      <span>
        {siteMetadata.locale === "id-ID"
          ? discountsData.timerTitleID
          : discountsData.timerTitleEN}
        :
      </span>
      <span className="">{distance}</span>
    </div>
  );
}

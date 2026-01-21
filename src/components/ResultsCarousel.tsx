"use client";

import Image from "next/image";
import { useState } from "react";
import ResultCard from "./ResultCard";
import PreviewCard from "./ui/PreviewCard";
import InnerContent from "./layout/InnerContent";

const IconTrending = (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.8333 20.5C21.6333 20.5 21.5 20.4333 21.3667 20.3L16.9 15.7667L15.3 17.3667C15.0333 17.6333 14.6333 17.6333 14.3667 17.3667L10.7 13.6333C10.4333 13.3667 10.4333 12.9667 10.7 12.7C10.9667 12.4333 11.3667 12.4333 11.6333 12.7L14.8333 15.9667L16.4333 14.3667C16.7 14.1 17.1 14.1 17.3667 14.3667L22.3 19.3667C22.5667 19.6333 22.5667 20.0333 22.3 20.3C22.1667 20.4333 22.0333 20.5 21.8333 20.5Z" fill="white" />
    <path d="M21.8346 20.4993H17.8346C17.4346 20.4993 17.168 20.2327 17.168 19.8327C17.168 19.4327 17.4346 19.166 17.8346 19.166H21.168V15.8327C21.168 15.4327 21.4346 15.166 21.8346 15.166C22.2346 15.166 22.5013 15.4327 22.5013 15.8327V19.8327C22.5013 20.2327 22.2346 20.4993 21.8346 20.4993Z" fill="white" />
  </svg>
);

const IconTime = (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 24.5C20.9107 24.5 24.5 20.9107 24.5 16.5C24.5 12.0893 20.9107 8.5 16.5 8.5C12.0893 8.5 8.5 12.0893 8.5 16.5C8.5 20.9107 12.0893 24.5 16.5 24.5ZM16.5 9.56665C20.324 9.56665 23.4334 12.676 23.4334 16.5C23.4334 20.324 20.324 23.4334 16.5 23.4334C12.676 23.4334 9.56665 20.324 9.56665 16.5C9.56665 12.676 12.676 9.56665 16.5 9.56665Z" fill="white" />
    <path d="M18.8315 19.0495C18.9302 19.1295 19.0475 19.1669 19.1648 19.1669C19.3222 19.1669 19.4768 19.0975 19.5808 18.9669C19.7648 18.7375 19.7275 18.4015 19.4982 18.2175L17.0315 16.2442V12.2335C17.0315 11.9402 16.7915 11.7002 16.4982 11.7002C16.2048 11.7002 15.9648 11.9402 15.9648 12.2335V16.5002C15.9648 16.6629 16.0395 16.8149 16.1648 16.9162L18.8315 19.0495Z" fill="white" />
  </svg>
);

const IconDollar = (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2081 15.5003V11.9451C17.9686 12.0734 18.6857 12.3855 19.2988 12.8541C19.421 12.9379 19.5644 12.9834 19.7129 12.9854C20.1886 12.9854 20.5764 12.6026 20.5815 12.1269C20.5825 11.9229 20.5027 11.727 20.3593 11.5815C19.4735 10.823 18.3625 10.3756 17.198 10.309V9.11717C17.198 8.77679 16.9223 8.50107 16.5819 8.50107C16.5749 8.50007 16.5678 8.50007 16.5607 8.50007C16.2153 8.49501 15.9305 8.77076 15.9254 9.11717V10.2686C13.653 10.4301 12.1077 11.834 12.1077 13.7025C12.1077 15.9951 14.057 16.6315 15.9254 17.1364V21.1764C14.9397 21.0441 14.0105 20.635 13.249 19.9947C13.1056 19.8806 12.9278 19.817 12.744 19.8129C12.2784 19.8452 11.9198 20.2351 11.9259 20.7017C11.9249 20.9057 12.0046 21.1017 12.148 21.2471C13.1914 22.1864 14.5326 22.7267 15.9355 22.7722V23.8832C15.9355 23.8902 15.9365 23.8973 15.9365 23.9044C15.9526 24.2498 16.2466 24.5164 16.592 24.4993C16.9323 24.4993 17.2081 24.2235 17.2081 23.8832V22.752C19.9653 22.5702 21.0763 20.8936 21.0763 19.116C21.0764 16.7325 19.0766 16.0053 17.2081 15.5003ZM15.9356 15.1771C14.8347 14.8539 13.9762 14.5206 13.9762 13.5813C13.9762 12.642 14.7539 11.9653 15.9356 11.8744V15.1771ZM17.2081 21.1966V17.5202C18.3494 17.8434 19.2382 18.2777 19.2281 19.3382C19.2281 20.1058 18.7029 21.0148 17.2081 21.1966Z" fill="white" />
  </svg>
);

const DATA = [
  {
    title: "Hospital Complex",
    location: "MIDDLE EAST",
    image: "/hospital-complex.jpg",
    bullets: [
      { title: "42% Energy Savings", subtitle: "vs. legacy systems", icon: IconTrending, },
      { title: "99.98% Uptime", subtitle: "Over 5 years", icon: IconTime, },
      { title: "$2.4M Savings", subtitle: "Annual Operational Cost", icon: IconDollar, },
    ],
  },
  {
    title: "Data Center",
    location: "SINGAPORE",
    image: "/hotel-lobby.jpg",
    bullets: [
      { title: "35% Energy Savings", subtitle: "Critical care zones", icon: IconTrending, },
      { title: "Continuous Operation", subtitle: "24/7/365 reliability", icon: IconTime, },
      { title: "40% TCO Reduction", subtitle: "10-year lifecycle", icon: IconDollar, },
    ],
  },
  {
    title: "Commercial Tower",
    location: "USA",
    image: "/commercial.jpg",
    bullets: [
      { title: "30% Energy Savings", subtitle: "optimized loads", icon: IconTrending, },
      { title: "Smart Balancing", subtitle: "AI controlled", icon: IconTime, },
      { title: "25% Cost Reduction", subtitle: "annual savings", icon: IconDollar, },
    ],
  },
];

export default function ResultCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % DATA.length);
  const prev = () => setIndex((i) => (i - 1 + DATA.length) % DATA.length);

  const current = DATA[index];
  const preview = DATA[(index + 1) % DATA.length];

  return (
    <section className="bg-[#066EB6] py-12 md:py-20 overflow-hidden">
      <InnerContent>
        <div className="max-w-[1440px]">

          {/* HEADING */}
          <div className="relative flex flex-col md:flex-row justify-between mb-10 md:mb-12">
            <div className="w-full max-w-[954px]">
              <h2 className="font-barlow font-semibold text-[48px] leading-[58px] text-white mb-2">
                Proven results from the Field
              </h2>
              <p className="font-inter font-medium text-[18px] leading-[26px] text-white">
                Documented performance data from mission-critical facilities across the globe—demonstrating energy savings, reliability, and total cost of ownership advantages.
              </p>
            </div>
            <button
              type="button"
              className="absolute right-0 top-2 lg:static w-fit flex items-center gap-1 font-inter font-medium text-[18px] text-white"
            >
              <span>View all</span>
              <div className="relative w-5 h-5">
                <img src="/arrowfill-whiteright.svg" alt="arrow" width={20} height={20} />
              </div>
            </button>
          </div>

          {/* CARDS */}
          <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
            <ResultCard data={current} onNext={next} />
            <div className="hidden lg:block flex-shrink-0">
              <PreviewCard data={preview} onNext={next} />
            </div>
          </div>

          {/* CONTROLS */}
          <div className="relative z-50 flex justify-center md:justify-end items-center gap-3 mt-8 md:mt-10">
            <div className="border border-white p-2 rounded-full cursor-pointer hover:opacity-80 transition" onClick={prev} style={{ pointerEvents: 'auto' }}>
              <Image
                src="/Vector.svg"
                alt="previous"
                width={24}
                height={24}
                className="rotate-180"
              />
            </div>

            <div className="font-barlow font-semibold text-[24px] leading-[29px] text-[#6BC06A] text-center w-[40px]">
              {index + 1}/{DATA.length}
            </div>

            <div className="border border-[#6BC06A] p-2 rounded-full cursor-pointer hover:opacity-80 transition" onClick={next} style={{ pointerEvents: 'auto' }}>
              <Image
                src="/Vector.svg"
                alt="next"
                width={24}
                height={24}
                className=""
              />
            </div>
          </div>

        </div>
      </InnerContent>
    </section>
  );
}

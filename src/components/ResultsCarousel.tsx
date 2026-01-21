"use client";

import Image from "next/image";
import { useState } from "react";
import ResultCard from "./ResultCard";
import PreviewCard from "./ui/PreviewCard";
import InnerContent from "./layout/InnerContent";

const icons=[
  {
    icon1:"resultcarouselbgbtn.svg",
    icon2: "resultcarouselbgbtn2.svg",
    icon3: "resultcarouselbgbtn3.svg",
  }
]

const DATA = [
  {
    title: "Data Center",
    location: "SINGAPORE",
    image: "/hospital.png",
    bullets: [
      { title: "42% Energy Savings", subtitle: "vs. legacy systems", icon:icons[0].icon1 ,},
      { title: "99.98% Uptime", subtitle: "over 5 years" , icon:icons[0].icon2 ,},
      { title: "$2.4M Annual Savings", subtitle: "annual operational cost" ,icon:icons[0].icon3, },
    ],
  },
  {
    title: "Hospital Complex",
    location: "MIDDLE EAST",
    image: "/green-blurred-nature-background.webp",
    bullets: [
      { title: "35% Energy Savings", subtitle: "vs. traditional systems" , icon:icons[0].icon1 ,},
      { title: "Continuous Operation", subtitle: "zero downtime", icon:icons[0].icon2 , },
      { title: "40% TCO Reduction", subtitle: "over 3 years", icon:icons[0].icon3, },
    ],
  },
  {
    title: "Commercial Tower",
    location: "USA",
    image: "/images/tower.jpg",
    bullets: [
      { title: "30% Energy Savings", subtitle: "optimized loads", icon:icons[0].icon1, },
      { title: "Smart Balancing", subtitle: "AI controlled", icon:icons[0].icon2, },
      { title: "25% Cost Reduction", subtitle: "annual savings" ,icon:icons[0].icon3,},
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
    <section className="bg-primary-500 py-12 md:py-20 overflow-hidden">
      <InnerContent>
      <div className="max-w-[1440px] ">

        {/* HEADING */}
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-10">
          <div className="max-w-[954px] max-h-[118px]">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Proven results from the Field
            </h2>
            <p className="font-inter font-medium leading-relaxed text-white text-sm sm:text-base lg:text-lg mt-2">
              Documented performance data from mission-critical facilities across the globe—demonstrating energy savings, reliability, and total cost of ownership advantages.
            </p>
          </div>
          <button
            type="button"
            className="w-fit flex items-center gap-1 text-base sm:text-lg font-medium text-white "
          >
            <span>View all</span>
            <img src="/arrowfill-whiteright.svg" alt="arrow" width={16} height={16} />
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
        <div className="relative z-50 flex justify-center md:justify-end items-center gap-4 md:gap-6 mt-8 md:mt-10">
          <Image 
            src="/Vector.svg" 
            alt="previous" 
            width={48} 
            height={48} 
            className="rotate-180 cursor-pointer hover:opacity-80 transition"
            onClick={prev}
            style={{ pointerEvents: 'auto' }}
          />
          <div className="text-white font-semibold text-lg md:text-xl text-center">
            {index + 1}/{DATA.length}
          </div>
          <Image 
            src="/Vector.svg" 
            alt="next" 
            width={48} 
            height={48}
            className="cursor-pointer hover:opacity-80 transition"
            onClick={next}
            style={{ pointerEvents: 'auto' }}
          />
        </div>

      </div>
      </InnerContent>
    </section>
  );
}

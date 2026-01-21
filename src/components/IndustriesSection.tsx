"use client";

import React from "react";
import Image from "next/image";
import IndustryCard from "./IndustryCard";
import InnerContent from "./layout/InnerContent";

interface IndustryData {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const IndustriesSection: React.FC = () => {
  const industries: IndustryData[] = [
    { id: "1", title: "Data Centers", description: "Mission-critical cooling solutions for high-density computing environments.", image: "/industry1.png", href: "/industries/data-centers" },
    { id: "2", title: "Healthcare", description: "Reliable HVAC systems for hospitals and medical facilities.", image: "/industry2.png", href: "/industries/healthcare" },
    { id: "3", title: "Commercial Buildings", description: "Energy-efficient cooling for office buildings and retail spaces.", image: "/industry3.png", href: "/industries/commercial" },
    { id: "4", title: "Manufacturing", description: "Industrial-grade chillers for process cooling and climate control.", image: "/industry4.png", href: "/industries/manufacturing" },
    { id: "5", title: "Education", description: "Sustainable cooling solutions for universities and schools.", image: "/industry5.png", href: "/industries/education" },
    { id: "6", title: "Hospitality", description: "Quiet and efficient HVAC systems for hotels and resorts.", image: "/industry6.png", href: "/industries/hospitality" },
  ];

  return (
    <section className="bg-white lg:mb-16">
      <InnerContent>
        {/* Header + CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-12">
          <div className="flex flex-col items-start text-left lg:w-[753px]">
            <h2 className="font-barlow font-semibold leading-tight text-primary-500 text-2xl sm:text-3xl lg:text-5xl">
              Industries We Serve
            </h2>
            <p className="font-inter font-medium leading-relaxed text-neutral-950 text-sm sm:text-base lg:text-lg mt-2">
              Mission-critical HVAC solutions engineered for the most demanding applications across diverse industries worldwide.
            </p>
          </div>

          <a className="flex items-center gap-1 text-base sm:text-lg font-medium font-inter text-secondary-500 hover:text-secondary-600 transition-colors whitespace-nowrap">
            View all
            <Image src="/arrowfill-right.svg" alt="" width={16} height={16} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-start">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} {...industry} />
          ))}
        </div>
      </InnerContent>
    </section>
  );
};

export default IndustriesSection;

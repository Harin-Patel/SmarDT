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
    { id: "1", title: "Data Centers", description: "Mission-critical cooling with guaranteed uptime and energy efficiency", image: "/datacenters.jpg", href: "#" },
    { id: "2", title: "Healthcare", description: "Reliable HVAC systems for patient comfort and facility operations", image: "/healthcare.jpg", href: "#" },
    { id: "3", title: "Universities & Labs", description: "High-performance systems for research facilities and campus buildings", image: "/university.jpg", href: "#" },
    { id: "4", title: "Government & Institutional", description: "Lifecycle value and energy savings for public infrastructure", image: "/government.jpg", href: "#" },
    { id: "5", title: "Commercial Campuses", description: "Scalable Solutions for multi-building corporate environments", image: "/commercial.jpg", href: "#" },
    { id: "6", title: "Industrial Process Cooling", description: "Precision temperature control for manufacturing operations", image: "/industrial.jpg", href: "#" },
  ];

  return (
    <section className="bg-white lg:mb-16">
      <div className="mx-auto w-full lg:max-w-[1281px] lg:min-h-[853px] px-4 lg:px-0">
        {/* Header + CTA */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-barlow font-semibold leading-tight text-primary-500 text-2xl sm:text-3xl lg:text-5xl">
              Industries We Serve
            </h2>
            <a
              href="#"
              className="flex items-center gap-0"
            >
              <span style={{ fontFamily: 'var(--font-inter)' }} className="font-inter font-medium text-[18px] leading-[26px] tracking-[0px] text-[#6BC06A] whitespace-nowrap antialiased">View all</span>
              <div className="relative w-5 h-5">
                <Image src="/arrowfill-right.svg" alt="->" width={20} height={20} />
              </div>
            </a>
          </div>
          <p className="font-inter font-medium leading-relaxed text-neutral-950 text-sm sm:text-base lg:text-lg lg:w-[753px]">
            Mission-critical HVAC solutions engineered for the most demanding applications across diverse industries worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-start">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

"use client";

import React from "react";
import Image from "next/image";
import InnerContent from "./layout/InnerContent";

interface ChillerData {
  className: string;
  capacity: string;
  power: string;
  category: string; // The text for the badge
  image: string;
  features: string[];
  description: string;
}

interface ChillerCardProps {
  data: ChillerData;
}

const ChillerCard: React.FC<ChillerCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* HEADER */}
      <div className="flex flex-row justify-between items-start mb-2">
        {/* Left Side: Name, Capacity, Power */}
        <div className="flex flex-col gap-1">
          <span className="font-inter font-semibold text-[18px] leading-[26px] text-[#231F20]">
            {data.className}
          </span>
          <h3 className="font-barlow font-semibold text-[28px] leading-[34px] text-[#066EB6]">
            {data.capacity}
          </h3>
          <span className="font-inter font-medium text-[12px] leading-[20px] text-[#77787B]">
            {data.power}
          </span>
        </div>

        {/* Right Side: Badge */}
        <div className="flex items-center justify-center px-2 py-2 bg-[#066EB6] rounded-[4px]">
          <span className="font-barlow font-medium text-[12px] leading-[14px] text-center text-white">
            {data.category}
          </span>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-full h-[402px] mb-4">
        {/* Using mix-blend-mode: darken as per Figma */}
        <div className="relative w-full h-full mix-blend-darken">
          <Image
            src={data.image}
            alt={data.className}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* CONTENT GROUP */}
      <div className="flex flex-col gap-3 mb-6">
        {/* Features as list items / text lines */}
        <div className="flex flex-col gap-1">
          {data.features.map((feat, i) => (
            <div key={i} className="flex flex-row items-start gap-2">
              <span className="text-[#77787B] text-[14px] leading-[22px]">•</span>
              <p className="font-barlow font-normal text-[14px] leading-[22px] text-[#77787B]">
                {feat}
              </p>
            </div>
          ))}
        </div>
        {/* Description Paragraph */}
        <p className="font-barlow font-normal text-[14px] leading-[22px] text-[#77787B]">
          {data.description}
        </p>
      </div>

      {/* BUTTON */}
      <div className="mt-auto">
        <button className="flex flex-row justify-center items-center px-6 py-3 gap-1 w-[193px] h-[44px] bg-[#6BC06A] rounded-full hover:bg-[#5ab059] transition-colors">
          <span className="font-barlow font-semibold text-[16px] leading-[19px] text-white">
            Learn more
          </span>
          <div className="relative w-5 h-5 flex items-center justify-center">
            {/* Arrow icon would go here. Using a simple text arrow or SVG if available. 
                     Figma shows 'arrow-right' 20x20. */}
            <Image src="/Vector.svg" alt="" width={20} height={20} />
          </div>
        </button>
      </div>
    </div>
  );
};


const ProductRange: React.FC = () => {
  const chillers: ChillerData[] = [
    {
      className: "T-Class",
      capacity: "40 to 500 tons",
      power: "(140-2,1760 kW)",
      category: "Air-cooled oil-free chiller",
      image: "/chiller1.png",
      features: [
        "Highest operating efficiency.",
        "Smallest footprint.",
        "70% quieter operation.",
      ],
      description:
        "The Smardt air-cooled range offers the smallest footprint, the quietest operation, and the highest air-cooled operating efficiencies in the market. Standard Smardt air-cooled chillers are over 70% lower in sound power than a standard screw machine.",
    },
    {
      className: "V-Class",
      capacity: "350 to 3600 tons",
      power: "(1,231 kW-12,66 MW)",
      category: "Water-cooled oil-free chiller",
      image: "/chiller2.png",
      features: [
        "Our largest water-cooled oil-free chiller range",
        "Low kW/TR at low temperatures.",
        "Inbuilt redundancy with multiple compressor design",
      ],
      description:
        "Smardt’s V-Class range brings new levels of efficiency, reliability and turn-down to the large water-cooled chiller market – now up to 3600 TR (12.6MW).",
    },
    {
      className: "T-Class",
      capacity: "45 to 1600 tons",
      power: "(211-4,200 kW)",
      category: "Water-cooled oil-free chiller",
      image: "/chiller3.png",
      features: [
        "Highest operating efficiency",
        "Smallest footprint.",
        "Inbuilt redundancy.",
      ],
      description:
        "Smardt’s T-Class water-cooled chillers offer class leading performance and are available in a variety of different configurations to suite you project",
    },
    {
      className: "E-Class",
      capacity: "45 to 530 tons",
      power: "(160-1,860 kW)",
      category: "Evaporatively cooled oil-free chiller",
      image: "/chiller4.png",
      features: [
        "More efficient than air-cooled chillers",
        "High efficiency even in warm, dry climates",
        "No cooling towers or risk of Legionella",
      ],
      description:
        "The E-Class chiller is Smardt’s adiabatic cooling system. Cross-fluted evaporative pads are situated on the outside of the coils. Separated from the coil surface, these pads are designed to be saturated with treated water, and the pads also provide protection for the coils.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 relative">
      {/* Main Container tailored to content dimensions */}
      <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-0 relative">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 relative">
          <div className="flex flex-col gap-6 max-w-[887px]">
            <h2 className="font-barlow font-semibold text-[48px] leading-[58px] text-[#066EB6]">
              The Broadest Range of High-Performance Oil-Free Chillers
            </h2>
            <p className="font-inter font-medium text-[18px] leading-[26px] text-[#231F20]">
              From pioneering oil-free chillers to comprehensive building systems-engineered for performance, reliability and lifecycle value.
            </p>
          </div>

          <a
            href="#"
            className="flex items-center gap-0 lg:absolute lg:right-0 lg:top-[19px]"
          >
            <span style={{ fontFamily: 'var(--font-inter)' }} className="font-inter font-medium text-[18px] leading-[26px] tracking-[0px] text-[#6BC06A] whitespace-nowrap antialiased">View all</span>
            <div className="relative w-5 h-5">
              <Image src="/arrowfill-right.svg" alt="->" width={20} height={20} />
            </div>
          </a>
        </div>

        {/* PRODUCT GRID */}
        {/* Grid layout: 2 columns on large screens. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[114px] gap-y-20">
          {chillers.map((chiller, index) => (
            <ChillerCard key={index} data={chiller} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductRange;

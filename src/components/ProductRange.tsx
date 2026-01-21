"use client";

import React from "react";
import Image from "next/image";
import InnerContent from "./layout/InnerContent";

interface ChillerData {
  className: string;
  capacity: string;
  power: string;
  category: string;
  image: string;
  features: string[];
  description: string;
}

interface ChillerCardProps {
  data: ChillerData;
}

const ChillerCard: React.FC<ChillerCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col  w-full max-w-[628px] h-[714px] p-6">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-semibold text-neutral-950">{data.className}</p>
          <h5 className="text-2xl lg:text-[28px] font-semibold text-primary-500 leading-tight">
            {data.capacity}
          </h5>
          <p className="text-xs text-neutral-500">{data.power}</p>
        </div>

        <span className="bg-primary-500 text-white text-xs px-3 py-1 rounded-sm whitespace-nowrap self-center">
          {data.category}
        </span>
      </div>

      {/* IMAGE */}
      <div className="relative h-[280px] sm:h-[320px] lg:h-[402px] w-full">
        <Image
          src={data.image}
          alt={data.className}
          fill
          className="object-contain"
        />
      </div>

      {/* FEATURES */}
      <ul className="">
        {data.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm text-neutral-500">
            <span className="text-secondary-500">•</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* DESCRIPTION */}
      <p className="text-sm text-neutral-500">{data.description}</p>

      {/* CTA */}
      <button className=" self-start inline-flex items-center mt-3 px-6 h-11 rounded-full bg-secondary-500 text-white text-sm font-semibold hover:bg-secondary-600 transition">
        Learn more
        <Image src="/Vector.svg" alt="arrow" width={14} height={16} className="ml-2" />
      </button>
    </div>
  );
};


const ProductRange: React.FC = () => {
  const chillers: ChillerData[] = [
    {
      className: "T-Class",
      capacity: "40 to 500 tons",
      power: "(140–1,760 kW)",
      category: "Air-cooled oil-free chillers",
      image: "/chiller1.png",
      features: [
        "Highest operating efficiency",
        "Smallest footprint",
        "70% quieter operation",
      ],
      description:
        "The Smardt air-cooled range offers the smallest footprint, the quietest operation, and the highest air-cooled operating efficiencies in the market.",
    },
    {
      className: "Y-Class",
      capacity: "500 to 1000 tons",
      power: "(1,760–3,520 kW)",
      category: "Water-cooled oil-free chillers",
      image: "/chiller2.png",
      features: [
        "Advanced heat exchanger design",
        "Energy-efficient operation",
        "Smart control system",
      ],
      description:
        "Smardt’s V-Class range brings new levels of efficiency and reliability to the large water-cooled chiller market.",
    },
    {
      className: "G-Class",
      capacity: "1000 to 2000 tons",
      power: "(3,520–7,040 kW)",
      category: "Industrial oil-free chillers",
      image: "/chiller3.png",
      features: [
        "Robust construction",
        "High reliability",
        "Remote monitoring capability",
      ],
      description:
        "Smardt’s T-Class water-cooled chillers offer class-leading performance in multiple configurations.",
    },
    {
      className: "C-Class",
      capacity: "100 to 300 tons",
      power: "(352–1,056 kW)",
      category: "Compact oil-free chillers",
      image: "/chiller4.png",
      features: [
        "Flexible installation options",
        "Eco-friendly refrigerant",
        "Compact footprint",
      ],
      description:
        "The E-Class chiller is Smardt’s adiabatic cooling system designed for compact installations.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <InnerContent>
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-14">
          <div className="max-w-[887px] flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-barlow font-semibold leading-tight text-primary-500">
              The Broadest Range of High-Performance Oil-Free Chillers
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-medium font-inter text-neutral-950 leading-relaxed">
              From pioneering oil-free chillers to comprehensive building systems-engineered for performance, reliability and lifecycle value.
            </p>
          </div>

          <a
            href="#"
            className="flex items-center gap-1 text-base sm:text-lg font-medium font-inter text-secondary-500 hover:text-secondary-600 transition-colors whitespace-nowrap"
          >
            <span>View all</span>
            <Image
              src="/arrowfill-right.svg"
              alt="arrow"
              width={16}
              height={16}
            />
          </a>
        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 border-b border-neutral-200">
            {chillers.slice(0, 2).map((chiller) => (
              <ChillerCard key={chiller.className} data={chiller} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {chillers.slice(2).map((chiller) => (
              <ChillerCard key={chiller.className} data={chiller} />
            ))}
          </div>

        </div>


      </InnerContent>
    </section>
  );
};

export default ProductRange;

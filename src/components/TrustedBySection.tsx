"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components";
import InnerContent from "./layout/InnerContent";

interface Logo {
  id: string;
  src: string;
  alt: string;
}

interface TrustedBySectionProps {
  logos?: Logo[];
}

const TrustedBySection: React.FC<TrustedBySectionProps> = ({ logos: propLogos }) => {
  const logos = propLogos || [
    { id: "1", src: "/company1.svg", alt: "Company 1" },
    { id: "2", src: "/company2.svg", alt: "Company 2" },
    { id: "3", src: "/company3.svg", alt: "Company 3" },
    { id: "4", src: "/company4.svg", alt: "Company 4" },
    { id: "5", src: "/company5.svg", alt: "Company 5" },
    { id: "6", src: "/company6.svg", alt: "Company 6" },
    { id: "7", src: "/company7.svg", alt: "Company 7" },
    { id: "8", src: "/company8.svg", alt: "Company 8" }
  ];

  return (
    <section className="py-16 ">
      <InnerContent>
        <div className="flex flex-col ">
          <div className="flex flex-col mb-14 w-full">
            <h2
              className="
      text-xl
      sm:text-3xl
      md:text-4xl
      lg:text-5xl
      font-barlow
      font-semibold
      text-primary-500
      text-left
      md:text-center
      pb-2
    "
            >
              Trusted by Industry Leaders
            </h2>

            <p
              className="
      text-sm
      sm:text-base
      md:text-lg
      text-left
      md:text-center
      max-w-3xl
      md:mx-auto
    "
            >
              12,000+ installations worldwide across mission-critical facilities and demanding environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 w-full text-center p-1">
            {logos.map((logo) => (
              <div key={logo.id} className="relative w-full h-15 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}

                  fill
                  className="object-contain max-h-15"
                />
              </div>
            ))}

          </div>
        </div>
      </InnerContent>
    </section>

  );
};

export default TrustedBySection;

import React from "react";
import PerformanceCard from "./PerformanceCard";
import { SectionHeader } from "@/components";
import InnerContent from "./layout/InnerContent";

const PerformanceStats: React.FC = () => {
  const stats = [
    {
      number: "12,000+",
      label: "Installations Worldwide",
      description: "Proven performance across mission-critical facilities globally.",
    },
    {
      number: "20+",
      label: "Years Oil-Free Leadership",
      description: "Pioneering magnetic bearing compressor technology since 2004.",
    },
    {
      number: "Globally",
      label: "Service & Parts Network",
      description: "Factory-trained technicians and OEM parts in 60+ countries.",
    },
    {
      number: "40%",
      label: "Lifecycle Cost Advantage",
      description: "Lower energy consumption, minimal maintenance, maximum uptime.",
    },
  ];

  return (
    /* FULL-BLEED SECTION */
    <section
  className="
    w-full
    bg-primary-500/5
    min-h-[402px]
    lg:min-h-[360px]
    md:min-h-[320px]
    py-16
    flex items-center
  "
>
      
      {/* CONTENT CONTAINER */}
      <InnerContent>
        <div className="flex flex-col items-center">

          <SectionHeader
            title="Proven Performance at Scale"
            subtitle="Two decades of oil-free innovation delivering unmatched reliability and efficiency."
            align="center"
          />

          <div className="mt-14" />

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-y-8
              lg:gap-x-[78px]
            "
          >
            {stats.map((stat, index) => (
              <PerformanceCard
                key={index}
                number={stat.number}
                label={stat.label}
                description={stat.description}
                className="w-full lg:w-[261px]"
              />
            ))}
          </div>

        </div>
      </InnerContent>

    </section>
  );
};

export default PerformanceStats;

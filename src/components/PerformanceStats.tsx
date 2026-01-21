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
    <section className="relative w-full max-w-[1440px] mx-auto h-auto lg:h-[402px] bg-[#066EB608] overflow-hidden">

      {/* Background Rectangle 43 */}
      <div
        className="absolute hidden lg:block"
        style={{
          width: '331.41px',
          height: '480.93px',
          left: 'calc(50% + 298px)',
          top: '-114px',
          background: 'linear-gradient(182.21deg, rgba(255, 255, 255, 0.56) 1.86%, rgba(255, 255, 255, 0) 115.35%)',
          transform: 'rotate(37.72deg)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Content Container (Group 32 equivalent, slightly simplified for flex centering) */}
      <div className="relative w-full h-full p-8 lg:p-0">

        {/* Heading Group */}
        <div className="flex flex-col items-center gap-2 lg:absolute lg:top-[64px] lg:left-1/2 lg:-translate-x-1/2 w-full max-w-[737px] text-center">
          <h2 className="font-barlow font-semibold text-3xl lg:text-[48px] lg:leading-[58px] text-[#066EB6]">
            Proven Performance at Scale
          </h2>
          <p className="font-inter font-medium text-lg lg:text-[18px] lg:leading-[26px] text-[#231F20]">
            Two decades of oil-free innovation delivering unmatched reliability and efficiency.
          </p>
        </div>

        {/* Stats Row (Frame 177) */}
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8 lg:gap-[78px] mt-12 lg:mt-0 lg:absolute lg:top-[212px] lg:left-[80px] w-full lg:w-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start gap-2 w-full max-w-[261px]">
              <div className="flex flex-col items-start gap-1 w-full">
                <h3 className="font-barlow font-semibold text-4xl lg:text-[48px] leading-[1.2] text-[#066EB6]">
                  {stat.number}
                </h3>
                <h4 className="font-barlow font-medium text-lg lg:text-[18px] leading-[1.2] text-[#231F20]">
                  {stat.label}
                </h4>
              </div>
              <p className="font-barlow font-medium text-sm lg:text-[14px] leading-[1.2] text-[#77787B]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerformanceStats;

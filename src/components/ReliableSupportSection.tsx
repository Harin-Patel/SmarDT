"use client";

import React from "react";
import Image from "next/image";
import LifecycleCard from "./LifecycleCard";
import { SectionHeader } from "@/components";
import InnerContent from "./layout/InnerContent";

interface CardData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ReliableSupportSection: React.FC = () => {
  const cards: CardData[] = [
    {
      id: "1",
      icon: "/reliablesupport1.png",
      title: "Lifecycle Service",
      description: "Factory-trained technicians and OEM parts for system longevity and performance assurance."
    },
    {
      id: "2",
      icon: "/reliablesupport2.png",
      title: "Performance Monitoring",
      description: "Factory-trained technicians and OEM parts for system longevity and performance assurance."
    },
    {
      id: "3",
      icon: "/reliablesupport3.png",
      title: "Technical Training",
      description: "Factory-trained technicians and OEM parts for system longevity and performance assurance."
    },
    {
      id: "4",
      icon: "/reliablesupport4.png",
      title: "Global Support",
      description: "Factory-trained technicians and OEM parts for system longevity and performance assurance."
    }
  ];

  return (
    <section className=" px-4 sm:px-6 lg:px-8">
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
              Reliable Support for Every System
            </h2>

            <p
              className="
      text-sm
      sm:text-base
      md:text-lg
      text-left md:text-center max-w-3xl md:mx-auto
    "
            >
              Global technical support and lifecycle services for your Smardt systems.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <LifecycleCard
                key={card.id}
                icon={
                  <div className="w-12 h-12 relative">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                }
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </InnerContent>
    </section>
  );
};

export default ReliableSupportSection;

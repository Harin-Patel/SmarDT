"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components";
import ServiceCard from "./ServiceCard";
import InnerContent from "./layout/InnerContent";

interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const CTASection: React.FC = () => {
  const services: ServiceData[] = [
    {
      id: "1",
      icon: "/contactlanderlogo1.png",
      title: "Application Engineering",
      description: "Custom system configuration and performance modeling"
    },
    {
      id: "2",
      icon: "/contactlanderlogo2.png",
      title: "Factory Support",
      description: "Custom system configuration and performance modeling"
    },
    {
      id: "3",
      icon: "/contactlanderlogo3.png",
      title: "Global Service Network",
      description: "Custom system configuration and performance modeling"
    }
  ];

  return (
    <section className="py-16">
      <InnerContent>
      <div className="relative mx-auto overflow-hidden rounded-3xl">
        <Image
          src="/contactlanderbg.jpg"
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-primary-600/80 opacity-60%" />

        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Optimize Your HVAC Systems?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                With over 12,000+ installations worldwide, Smardt delivers unmatched efficiency, reliability, and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Speak with a Specialist
                </Button>
                <button className="inline-flex items-center justify-center font-medium transition-all duration-200 h-12 px-6 rounded-[100px] border-2 border-white text-white hover:bg-white/10 active:bg-white/20">
                  Request a Quote
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </InnerContent>
    </section>
  );
};

export default CTASection;

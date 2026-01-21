"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-primary-300/30 rounded-full px-6 py-4">
    <div className="w-12 h-12 relative flex-shrink-0">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
      />
    </div>
    <div className="flex flex-col">
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-white/90">{description}</p>
    </div>
  </div>
);

export default ServiceCard;

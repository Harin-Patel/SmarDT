"use client";

import React from "react";

interface LifecycleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const LifecycleCard: React.FC<LifecycleCardProps> = ({ icon, title, description }) => (
  <div className="bg-primary-50 border border-primary-100 py-5   px-3 flex flex-col h-full">
    <div className="text-primary-600 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-primary-600 mb-3">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default LifecycleCard;

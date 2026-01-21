"use client";

import React from "react";

interface TransparentCardProps {
  children: React.ReactNode;
  className?: string;
}

const TransparentCard: React.FC<TransparentCardProps> = ({ children, className = "" }) => (
  <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

export default TransparentCard;

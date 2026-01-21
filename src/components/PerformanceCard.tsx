import React from "react";

interface PerformanceCardProps {
  number: string;
  label: string;
  description: string;
  className?: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  number,
  label,
  description,
  className = "",
}) => {
  return (
    <div className={`w-[261px] min-h-[126px] ${className}`}>
      <div className="text-[48px] font-semibold leading-none text-primary-500">
        {number}
      </div>

      <div className="mt-1 text-[18px] font-semibold text-neutral-900">
        {label}
      </div>

      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
        {description}
      </p>
    </div>
  );
};


export default PerformanceCard;

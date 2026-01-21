"use client";

import React from "react";
import Image from "next/image";

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <div className="flex flex-col w-[411px] h-[336px] gap-4">
      {/* IMAGE */}
      <div className="relative w-[411px] h-[200px] overflow-hidden rounded-[14px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="flex-1 flex flex-col gap-2">
        {/* TITLE */}
        <h3 className="text-lg font-barlow font-semibold leading-tight text-neutral-950">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm font-barlow font-medium leading-snug text-neutral-500">
          {description}
        </p>
      </div>

      {/* BUTTON */}
      <button className="mt-auto inline-flex items-center justify-center h-[44px] w-[153px] rounded-[100px] bg-secondary-500 text-white text-base font-semibold hover:bg-secondary-600 transition">
        Learn more
        <Image
          src="/Vector.svg"
          alt="arrow"
          width={14}
          height={16}
          className="ml-2"
        />
      </button>
    </div>
  );
};

export default IndustryCard;

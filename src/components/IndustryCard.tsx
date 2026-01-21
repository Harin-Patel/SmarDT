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
    <div className="relative w-full max-w-[411px] h-full min-h-[336px] flex flex-col items-start gap-4">
      {/* IMAGE */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-[14px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* TEXT CONTENT FRAME */}
      <div className="flex flex-col items-start w-full max-w-[363px] gap-2 flex-1">
        {/* TITLE */}
        <h3 className="w-full min-h-[22px] font-barlow font-semibold text-[18px] leading-[22px] text-[#231F20]">
          {title}
        </h3>

        {/* DESCRIPTION & BUTTON WRAPPER */}
        <div className="flex flex-col items-start w-full gap-3 flex-1">
          {/* DESCRIPTION */}
          <p className="w-full font-barlow font-medium text-[14px] leading-[17px] text-[#77787B] line-clamp-2">
            {description}
          </p>

          {/* BUTTON */}
          <button className="mt-auto flex flex-row justify-center items-center px-6 py-3 gap-1 w-[153px] h-[44px] bg-[#6BC06A] rounded-[100px] hover:bg-[#5ab059] transition-colors">
            <span className="font-barlow font-semibold text-[16px] leading-[19px] text-white">
              Learn more
            </span>
            <div className="relative w-[20px] h-[20px] flex items-center justify-center">
              <Image src="/Vector.svg" alt="" width={20} height={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;

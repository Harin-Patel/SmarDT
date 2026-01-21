"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components";

interface HeroSliderProps {
  className?: string;
  slides?: { image: string; alt: string }[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ className = "", slides: propSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = propSlides || [
    { image: "/hero-slider.jpg", alt: "Hero slider image" },
    { image: "/test.png", alt: "Hero slider image" },
    { image: "/hero-slider.jpg", alt: "Hero slider image" },
    { image: "/test.png", alt: "Hero slider image" },
    { image: "/hero-slider.jpg", alt: "Hero slider image" },
  ];

  const heroContent = {
    heading: "Oil-Free and High-Efficiency Cooling & Heating Systems",
    tagline:
      "With over 12,000+ installations worldwide, Smardt delivers unmatched efficiency, reliability, and sustainability.",
    buttonText: "Speak with our specialist",
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className={`relative w-full max-w-[1440px] mx-auto mt-[72px] lg:mt-[108px] h-[634px] overflow-hidden ${className}`}>
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {[{ image: "/hero-factory.jpg", alt: "Factory Interface" }].map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={index === 0} />
            <div className="absolute inset-0 bg-[#066EB67A]" />
          </div>
        ))}
      </div>

      {/* Content + Navigation */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 lg:px-24">

        {/* Desktop Arrows */}
        <div className="hidden lg:flex justify-between items-center w-full max-w-[1440px]">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-[51px] h-[51px] rounded-full bg-[#FFFFFF33] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
            style={{ boxShadow: "inset 1px 1px 0 0 rgba(255,255,255,0.5), inset -1px -1px 0 0 rgba(255,255,255,0.5)" }}
          >
            <Image src="/vectorleft.svg" alt="Previous" width={20} height={20} className="pointer-events-none" />
          </button>

          {/* Content */}
          {/* Desktop Content Group */}
          <div className="flex flex-col items-center text-center w-full max-w-[777px] lg:gap-[40px]">
            {/* Heading and Tagline Group */}
            <div className="flex flex-col items-center lg:gap-[16px]">
              <h2 className="text-3xl sm:text-4xl lg:text-[60px] lg:leading-[72px] font-semibold font-barlow text-white tracking-normal">
                {heroContent.heading}
              </h2>
              <h6 className="text-xl lg:text-[24px] lg:leading-[29px] font-semibold font-barlow text-[#DBEAFE] tracking-normal max-w-[736px]">
                {heroContent.tagline}
              </h6>
            </div>
            {/* Button */}
            <Button className="w-auto lg:w-[225px] h-auto lg:h-[48px] !bg-[#6BC06A] !rounded-full !text-white !font-barlow !font-semibold text-lg lg:text-[16px] lg:leading-[19px] px-8 lg:px-0 flex items-center justify-center">
              {heroContent.buttonText}
            </Button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-[51px] h-[51px] rounded-full bg-[#FFFFFF33] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
            style={{ boxShadow: "inset 1px 1px 0 0 rgba(255,255,255,0.5), inset -1px -1px 0 0 rgba(255,255,255,0.5)" }}
          >
            <Image src="/vectorleft.svg" alt="Next" width={20} height={20} className="rotate-180 pointer-events-none" />
          </button>
        </div>

        {/* Mobile / Tablet Content */}
        <div className="lg:hidden flex flex-col items-center justify-center text-center w-[90%] max-w-md mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-barlow text-white mb-4 sm:mb-5 leading-[1.2] tracking-normal">
            {heroContent.heading}
          </h2>
          <h6 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-150 leading-tight tracking-normal mb-6 sm:mb-8">
            {heroContent.tagline}
          </h6>
          <Button className="text-lg px-8 py-3 h-auto">{heroContent.buttonText}</Button>

          {/* Mobile Arrows Below Content */}
          <div className="flex mt-6 gap-6">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-[51px] h-[51px] rounded-full bg-[#FFFFFF33] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
              style={{ boxShadow: "inset 1px 1px 0 0 rgba(255,255,255,0.5), inset -1px -1px 0 0 rgba(255,255,255,0.5)" }}
            >
              <Image src="/vectorleft.svg" alt="Previous" width={20} height={20} className="pointer-events-none" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-[51px] h-[51px] rounded-full bg-[#FFFFFF33] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
              style={{ boxShadow: "inset 1px 1px 0 0 rgba(255,255,255,0.5), inset -1px -1px 0 0 rgba(255,255,255,0.5)" }}
            >
              <Image src="/vectorleft.svg" alt="Next" width={20} height={20} className="rotate-180 pointer-events-none" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;

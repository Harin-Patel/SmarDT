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
    <section className={`relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden ${className}`}>
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={index === 0} />
            <div className="absolute inset-0 bg-primary-500/60" />
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
            className="w-[51px] h-[51px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
          >
            <Image src="/vectorleft.svg" alt="Previous" width={20} height={20} className="pointer-events-none" />
          </button>

          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center w-[777px] h-[306px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-barlow text-white mb-2 sm:mb-3 lg:mb-4 leading-[1.2] tracking-normal">
              {heroContent.heading}
            </h2>
            <h6 className="text-2xl font-semibold text-primary-150 leading-none tracking-normal mb-4 sm:mb-8 lg:mb-10">
              {heroContent.tagline}
            </h6>
            <Button>{heroContent.buttonText}</Button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-[51px] h-[51px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
          >
            <Image src="/vectorleft.svg" alt="Next" width={20} height={20} className="rotate-180 pointer-events-none" />
          </button>
        </div>

        {/* Mobile / Tablet Content */}
        <div className="lg:hidden flex flex-col items-center justify-center text-center w-[90%] max-w-md mt-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-barlow text-white mb-2 sm:mb-3 leading-[1.2] tracking-normal">
            {heroContent.heading}
          </h2>
          <h6 className="text-sm sm:text-base md:text-lg font-semibold text-primary-150 leading-none tracking-normal mb-4 sm:mb-6">
            {heroContent.tagline}
          </h6>
          <Button>{heroContent.buttonText}</Button>

          {/* Mobile Arrows Below Content */}
          <div className="flex mt-6 gap-6">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-[51px] h-[51px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
            >
              <Image src="/vectorleft.svg" alt="Previous" width={20} height={20} className="pointer-events-none" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-[51px] h-[51px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-105"
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

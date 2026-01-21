"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components";

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-secondary-500 rounded-2xl sm:rounded-3xl overflow-hidden min-h-64 sm:min-h-80">
          <div className="absolute left-0 inset-y-0 w-48 sm:w-64 lg:w-96 opacity-50 sm:opacity-70 pointer-events-none">
            <Image
              src="/newsletter-subscribe 1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="flex items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col gap-4 sm:gap-6 w-full lg:ml-auto lg:w-1/2">
              <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                SUBSCRIBE
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Subscribe to our newsletter
              </h2>
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-secondary-100 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
              />
              <button className="inline-flex items-center justify-center gap-2 py-2 sm:py-3 px-6 sm:px-8 rounded-full bg-white text-secondary-600 font-medium hover:bg-gray-50 transition-colors self-start text-sm sm:text-base">
                Submit
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

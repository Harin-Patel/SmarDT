"use client";

import React, { useState, useRef, useEffect } from "react";

interface DropdownItem {
  label: string;
  href?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  // Top nav items
  const topNavItems: NavItem[] = [
    { label: "Careers", href: "#" },
    {
      label: "Contact Us",
      href: "#",
      dropdown: [
        { label: "General Inquiry", href: "#" },
        { label: "Sales", href: "#" },
        { label: "Support", href: "#" },
      ]
    },
    { label: "Channel Partners", href: "#" },
  ];

  // Main nav items
  const mainNavItems: NavItem[] = [
    {
      label: "Products",
      href: "#",
      dropdown: [
        { label: "Product 1", href: "#" },
        { label: "Product 2", href: "#" },
        { label: "Product 3", href: "#" },
      ],
    },
    {
      label: "Service",
      href: "#",
      dropdown: [
        { label: "Service 1", href: "#" },
        { label: "Service 2", href: "#" },
      ],
    },
    {
      label: "Solutions",
      href: "#",
      dropdown: [
        { label: "Solution 1", href: "#" },
        { label: "Solution 2", href: "#" },
      ],
    },
    {
      label: "Insights",
      href: "#",
      dropdown: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Resources", href: "#" },
      ],
    },
    {
      label: "About Us",
      href: "#",
      dropdown: [
        { label: "Company", href: "#" },
        { label: "Team", href: "#" },
        { label: "History", href: "#" },
      ],
    },
  ];

  // Phone Icon SVG
  const PhoneIcon = () => (
    <img src="/phoneicon.svg" alt="Phone" width="16" height="16" />
  );

  // LinkedIn Icon SVG
  const LinkedInIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary-500"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  // Chevron Down Icon SVG
  const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.04 4.47L6 8.43L9.96 4.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Dropdown Component
  const Dropdown: React.FC<{
    items: DropdownItem[];
    isOpen: boolean;
    onClose: () => void;
    className?: string;
  }> = ({ items, isOpen, className = "" }) => {
    if (!isOpen) return null;

    return (
      <div
        className={`absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg border border-neutral-200 py-2 min-w-[180px] z-50 ${className}`}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href || "#"}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 ${className}`}>
      {/* Top Navigation Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-white border-b border-neutral-200">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8 sm:h-9">
            {/* Left side - Top nav links */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              {topNavItems.map((item, index) => (
                <div key={index} className="relative" ref={(el) => { dropdownRefs.current[`top-${index}`] = el; }}>
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(`top-${index}`)}
                      style={{ color: '#77787B', lineHeight: '17px', gap: '4px' }}
                      className="flex items-center text-xs sm:text-sm font-medium tracking-normal hover:text-neutral-900 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon className="text-[#9CA3AF]" />
                    </button>
                  ) : (
                    <a href={item.href || "#"} style={{ color: '#77787B', lineHeight: '17px' }} className="text-xs sm:text-sm font-medium tracking-normal hover:text-neutral-900 transition-colors">
                      {item.label}
                    </a>
                  )}
                  {item.dropdown && (
                    <Dropdown
                      items={item.dropdown}
                      isOpen={activeDropdown === `top-${index}`}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Right side - Phone, Language, LinkedIn */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
              <a
                href="tel:+15183245741"
                className="flex items-center text-neutral-950 hover:text-neutral-900 transition-colors"
                style={{ gap: '8px' }}
              >
                <PhoneIcon />
                <span className="hidden sm:inline text-xs font-medium tracking-normal" style={{ lineHeight: '24px' }}>+1 518 324 5741</span>
              </a>
              <div className="relative" ref={(el) => { dropdownRefs.current["top-lang"] = el; }}>
                <button
                  onClick={() => toggleDropdown("top-lang")}
                  className="flex items-center h-9 py-3 transition-colors"
                  style={{ gap: '4px' }}
                >
                  <span className="text-xs sm:text-sm font-medium tracking-normal text-neutral-950" style={{ lineHeight: '22px' }}>Eng</span>
                  <ChevronDownIcon className="text-neutral-950" />
                </button>
                <Dropdown
                  items={[{ label: "English", href: "#" }, { label: "Français", href: "#" }, { label: "Español", href: "#" }]}
                  isOpen={activeDropdown === "top-lang"}
                  onClose={() => setActiveDropdown(null)}
                />
              </div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left - Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="/Smardt_Logo-P300-U-1024x185 1.png"
                  alt="Smardt Logo"
                  className="h-5 sm:h-6 w-auto"
                />
              </a>
            </div>

            {/* Center - Main Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
              {mainNavItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={(el) => { dropdownRefs.current[`main-${index}`] = el; }}
                >
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(`main-${index}`)}
                      className="flex items-center gap-1 text-white hover:text-neutral-100 transition-colors text-sm whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon className="text-white opacity-80" />
                    </button>
                  ) : (
                    <a href={item.href || "#"} className="text-white hover:text-neutral-100 transition-colors text-sm whitespace-nowrap">
                      {item.label}
                    </a>
                  )}
                  {item.dropdown && (
                    <Dropdown
                      items={item.dropdown}
                      isOpen={activeDropdown === `main-${index}`}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </div>
              ))}
            </nav>

            {/* Right - Language & Button */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
              {/* Language selector */}
              <div className="relative" ref={(el) => { dropdownRefs.current["main-lang"] = el; }}>
                <button
                  onClick={() => toggleDropdown("main-lang")}
                  className="flex items-center gap-1 text-white hover:text-neutral-100 transition-colors text-sm"
                >
                  <span>Eng</span>
                  <ChevronDownIcon className="text-white opacity-80" />
                </button>
                <Dropdown
                  items={[
                    { label: "English", href: "#" },
                    { label: "Français", href: "#" },
                    { label: "Español", href: "#" },
                  ]}
                  isOpen={activeDropdown === "main-lang"}
                  onClose={() => setActiveDropdown(null)}
                />
              </div>

              {/* Request a quote button */}
              <a
                href="#"
                className="px-4 xl:px-6 py-2 border-2 border-white !text-white rounded-full hover:bg-white hover:!text-primary-500 transition-all font-medium text-sm whitespace-nowrap"
              >
                Request a quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-primary-600 border-t border-primary-400">
            <div className="px-4 py-4 space-y-3">
              {/* Top nav items in mobile */}
              {topNavItems.map((item, index) => (
                <div key={`mobile-top-${index}`}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(`mobile-top-${index}`)}
                        className="flex items-center justify-between w-full !text-white hover:text-neutral-100 py-2 text-sm"
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon className="text-white opacity-80" />
                      </button>
                      {activeDropdown === `mobile-top-${index}` && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href || "#"}
                              className="block !text-white/80 hover:text-white py-1 text-sm"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={item.href || "#"} className="block !text-white hover:text-neutral-100 py-2 text-sm">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Divider */}
              <div className="border-t border-primary-400 my-2"></div>

              {/* Main nav items */}
              {mainNavItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(`mobile-${index}`)}
                        className="flex items-center justify-between w-full !text-white hover:text-neutral-100 py-2 text-sm"
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon className="text-white opacity-80" />
                      </button>
                      {activeDropdown === `mobile-${index}` && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href || "#"}
                              className="block !text-white/80 hover:text-white py-1 text-sm"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={item.href || "#"} className="block !text-white hover:text-neutral-100 py-2 text-sm">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="#"
                className="block w-full text-center px-4 py-2 border-2 border-white !text-white rounded-full hover:bg-white hover:!text-primary-500 transition-all font-medium text-sm mt-4"
              >
                Request a quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

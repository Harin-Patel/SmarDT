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
  // LinkedIn Icon SVG
  const LinkedInIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#0073B1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
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

  const FilledArrowDown = ({ className = "" }: { className?: string }) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor" />
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
    <nav className={`absolute top-0 left-0 z-50 flex flex-col items-center w-full ${className}`}>
      {/* Top Navigation Bar */}
      <div className="hidden lg:flex justify-center items-center bg-white w-full" style={{ height: '36px' }}>
        <div className="flex flex-row justify-between items-center px-4 lg:px-[80px] w-full max-w-[1440px]" style={{ height: '100%' }}>

          {/* Left side - Top nav links */}
          <div className="flex flex-row items-center" style={{ gap: '30px' }}>
            {topNavItems.map((item, index) => (
              <div key={index} className="relative" ref={(el) => { dropdownRefs.current[`top-${index}`] = el; }}>
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(`top-${index}`)}
                    className="flex items-center hover:text-neutral-900 transition-colors"
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#77787B',
                      gap: '4px'
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon className="text-[#77787B]" />
                  </button>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="hover:text-neutral-900 transition-colors"
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#77787B'
                    }}
                  >
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
          <div className="flex items-center justify-between" style={{ width: '210px', height: '36px' }}>
            {/* Phone */}
            <a
              href="tel:+15183245741"
              className="flex items-center hover:text-neutral-900 transition-colors"
              style={{ gap: '8px' }}
            >
              <img src="/phoneicon.svg" alt="Phone" width="14" height="14" />
              <span style={{
                fontFamily: 'var(--font-barlow)',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '24px',
                color: '#231F20'
              }}>
                +1 518 324 5741
              </span>
            </a>

            {/* Language */}
            <div className="relative" ref={(el) => { dropdownRefs.current["top-lang"] = el; }}>
              <button
                onClick={() => toggleDropdown("top-lang")}
                className="flex items-center justify-center transition-colors relative"
                style={{ width: '24px', height: '36px' }}
              >
                <span style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#231F20'
                }}>
                  Eng
                </span>
                <div style={{ position: 'absolute', left: '30px', top: '13px', width: '12px', height: '12px' }}>
                  <FilledArrowDown className="text-[#231F20]" />
                </div>
              </button>
              <Dropdown
                items={[{ label: "English", href: "#" }, { label: "Français", href: "#" }, { label: "Español", href: "#" }]}
                isOpen={activeDropdown === "top-lang"}
                onClose={() => setActiveDropdown(null)}
              />
            </div>

            {/* LinkedIn */}
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

      {/* Main Navigation Bar */}
      <div className="w-full flex justify-center items-center bg-[#066EB6] px-4 lg:px-[80px]" style={{ height: '72px' }}>
        <div className="w-full max-w-[1440px] flex items-center justify-between h-full">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/Smardt_Logo-P300-U-1024x185 1.png"
                alt="Smardt Logo"
                className="h-6 lg:h-6 w-auto"
                style={{ width: 'auto', maxHeight: '24px' }}
              />
            </a>
          </div>

          {/* Center - Main Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2" style={{ gap: '24px' }}>
            {mainNavItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={(el) => { dropdownRefs.current[`main-${index}`] = el; }}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(`main-${index}`)}
                    className="flex items-center hover:text-neutral-100 transition-colors whitespace-nowrap"
                    style={{ gap: '4px' }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: '#FFFFFF'
                    }}>{item.label}</span>
                    <ChevronDownIcon className="text-white opacity-80" />
                  </button>
                ) : (
                  <a href={item.href || "#"} className="hover:text-neutral-100 transition-colors whitespace-nowrap"
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: '#FFFFFF'
                    }}
                  >
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
          </div>

          {/* Right - Language & Button */}
          <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: '16px' }}>
            {/* Language selector */}
            <div className="relative" ref={(el) => { dropdownRefs.current["main-lang"] = el; }}>
              <button
                onClick={() => toggleDropdown("main-lang")}
                className="flex items-center hover:text-neutral-100 transition-colors"
                style={{ gap: '4px' }}
              >
                <span style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#FFFFFF'
                }}>
                  Eng
                </span>
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
              className="flex justify-center items-center hover:bg-white hover:!text-[#066EB6] transition-all whitespace-nowrap"
              style={{
                width: '157px',
                height: '48px',
                backgroundColor: '#066EB6',
                border: '1px solid #FFFFFF',
                borderRadius: '100px',
                padding: '12px 16px',
                gap: '10px',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#FFFFFF'
              }}
            >
              Request a quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[#066EB6] border-t border-primary-400">
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

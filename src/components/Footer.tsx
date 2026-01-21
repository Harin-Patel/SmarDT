import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerData = {
  brand: {
    logo: "/Smardt_Logo-P300-U-1024x185 1.png",
    description:
      "Leading provider of oil-free magnetic bearing centrifugal chillers for sustainable cooling solutions.",
    certifications: ["/ahri-2@3x.png", "/ahri-2@3x.png"],
  },
  social: [
    { icon: "/whatsapp.png", href: "#", label: "WhatsApp" },
    { icon: "/instagram.png", href: "#", label: "Instagram" },
    { icon: "/youtube.png", href: "#", label: "YouTube" },
  ],
  links: {
    products: [
      { label: "Oil-Free Chillers", href: "#" },
      { label: "Magnetic Bearing Technology", href: "#" },
      { label: "Energy Efficient Systems", href: "#" },
      { label: "Custom Solutions", href: "#" },
    ],
    industries: [
      { label: "Data Centers", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Manufacturing", href: "#" },
      { label: "Commercial Buildings", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News & Events", href: "#" },
      { label: "Contact", href: "#" },
    ],
    support: [
      { label: "Documentation", href: "#" },
      { label: "Technical Support", href: "#" },
      { label: "Warranty", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Commercial Data & Privacy Statement", href: "#" },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-500 text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-1">
            <div className="relative w-32 sm:w-40 lg:w-48 h-6 sm:h-8 lg:h-10">
              <Image
                src={footerData.brand.logo}
                alt="Smardt Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm leading-relaxed max-w-xs">
              {footerData.brand.description}
            </p>
            <div className="flex gap-3">
              {footerData.brand.certifications.map((cert, idx) => (
                <div key={idx} className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                  <Image
                    src={cert}
                    alt={`Certification ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs sm:text-sm font-medium">Get in touch</p>
              <div className="flex gap-2 sm:gap-3">
                {footerData.social.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:opacity-70 transition-opacity"
                    aria-label={social.label}
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      fill
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Products
            </h3>
            <ul className="flex flex-col gap-2">
              {footerData.links.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Industries
            </h3>
            <ul className="flex flex-col gap-2">
              {footerData.links.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {footerData.links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>
            <ul className="flex flex-col gap-2">
              {footerData.links.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm">
              © 2025 Smardt Chiller Group, Inc.
            </p>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {footerData.legal.map((link, idx) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                  {idx < footerData.legal.length - 1 && (
                    <span className="opacity-40">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

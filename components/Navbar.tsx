"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { name: "House Washing", href: "/house-washing" },
  { name: "Window Cleaning", href: "/window-cleaning" },
  { name: "Gutter Cleaning", href: "/gutter-cleaning" },
  { name: "Roof Treatment", href: "/roof-treatment" },
  { name: "Driveway Cleaning", href: "/driveway-cleaning" },
  { name: "Deck & Fence Cleaning", href: "/deck-fence-cleaning" },
  { name: "Roof Wash", href: "/roof-wash" },
  { name: "Building Washing", href: "/building-washing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://aquabrother.co.nz/images/logos/logo.png"
              alt="Aqua Brother Water Blasting Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 font-semibold text-sm hover:text-brand-blue transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="nav-item relative">
              <button
                className="flex items-center gap-1 text-gray-700 font-semibold text-sm hover:text-brand-blue transition-colors"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Services <ChevronDown size={15} />
              </button>
              <div className="nav-dropdown">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-brand-blue transition-colors"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/building-washing"
              className="text-gray-700 font-semibold text-sm hover:text-brand-blue transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Commercial
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-semibold text-sm hover:text-brand-blue transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-semibold text-sm hover:text-brand-blue transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Contact Us
            </Link>
            <Link
              href="/instant-quote"
              className="px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1a6fb8, #0f4f8a)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Instant Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className="px-4 py-3 rounded-lg text-gray-700 font-semibold text-sm hover:bg-blue-50 hover:text-brand-blue"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <button
              className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 font-semibold text-sm hover:bg-blue-50 hover:text-brand-blue w-full text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={15} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-brand-blue"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/building-washing"
              className="px-4 py-3 rounded-lg text-gray-700 font-semibold text-sm hover:bg-blue-50"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              Commercial
            </Link>
            <Link
              href="/about"
              className="px-4 py-3 rounded-lg text-gray-700 font-semibold text-sm hover:bg-blue-50"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-4 py-3 rounded-lg text-gray-700 font-semibold text-sm hover:bg-blue-50"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/instant-quote"
                className="px-4 py-3 rounded-full font-bold text-sm text-white text-center"
                style={{
                  background: "linear-gradient(135deg, #1a6fb8, #0f4f8a)",
                  fontFamily: "Montserrat, sans-serif",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Instant Quote
              </Link>
              <a
                href="tel:0221266069"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-brand-blue text-brand-blue font-bold text-sm"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Phone size={16} /> 022 126 6069
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

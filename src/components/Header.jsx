'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Company Name */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900">Savannah Solar Power</span>
              <span className="text-xs text-gray-600 uppercase tracking-wide">C Squared Power LLC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium transition flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  <Link href="/residential" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Residential Solar
                  </Link>
                  <Link href="/commercial" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Commercial Solar
                  </Link>
                  <Link href="/battery-backup" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Battery Backup
                  </Link>
                  <Link href="/tesla-powerwall" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Tesla Powerwall
                  </Link>
                  <Link href="/enphase-systems" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Enphase Systems
                  </Link>
                  <Link href="/service-repair" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Service & Repair
                  </Link>
                  <Link href="/storm-damage" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Storm Damage / Insurance
                  </Link>
                </div>
              )}
            </div>

            <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Equipment
            </Link>
            <Link href="/financing" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Financing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+19125551234"
              className="text-blue-600 font-bold text-lg hover:text-blue-700 transition"
            >
              (912) 555-1234
            </a>
            <Link
              href="/contact?quote=true"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition shadow-md"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition py-2">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition py-2">
                About
              </Link>

              {/* Mobile Services Links */}
              <div className="pl-4 space-y-2 border-l-2 border-blue-500">
                <p className="text-gray-900 font-semibold text-sm uppercase tracking-wide">Services</p>
                <Link href="/residential" className="block text-gray-700 hover:text-blue-600 transition py-1">
                  Residential Solar
                </Link>
                <Link href="/commercial" className="block text-gray-700 hover:text-blue-600 transition py-1">
                  Commercial Solar
                </Link>
                <Link href="/battery-backup" className="block text-gray-700 hover:text-blue-600 transition py-1">
                  Battery Backup
                </Link>
                <Link href="/tesla-powerwall" className="block text-gray-700 hover:text-blue-600 transition py-1">
                  Tesla Powerwall
                </Link>
                <Link href="/enphase-systems" className="block text-gray-700 hover:text-blue-600 transition py-1">
                  Enphase Systems
                </Link>
                <Link href="/service-repair" className="block text-gray-700 hover:text-blue-600 transition py-1">
                  Service & Repair
                </Link>
                <Link href="/storm-damage" className="block text-gray-700 hover:text-blue-600 transition py-1">
                  Storm Damage / Insurance
                </Link>
              </div>

              <Link href="/equipment" className="text-gray-700 hover:text-blue-600 font-medium transition py-2">
                Equipment
              </Link>
              <Link href="/financing" className="text-gray-700 hover:text-blue-600 font-medium transition py-2">
                Financing
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition py-2">
                Contact
              </Link>

              {/* Mobile Phone & CTA */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 mt-4">
                <a
                  href="tel:+19125551234"
                  className="text-blue-600 font-bold text-lg text-center"
                >
                  (912) 555-1234
                </a>
                <Link
                  href="/contact?quote=true"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition shadow-md text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
